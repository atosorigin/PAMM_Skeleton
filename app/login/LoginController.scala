package login

import com.mongodb.casbah.Imports._
import com.mongodb.casbah.commons.MongoDBObject
import org.joda.time.DateTime
import play.api.libs.json.Json
import play.api.mvc.{Action, Controller}
import utils.{Constants, MongoUtils}

/**
  * Created by Mark Fearnley on 17/05/16.
  *
  * Controller to handle requests surrounding Login and Registration.
  */
class LoginController extends Controller {

  /**
    * Register a new user. Assumes the Request is a JSON Object with the following structure:
    * {
    *   username: [USERNAME]
    *   password: [PASSWORD]
    * }
    *
    * @return A Json response, with 'success' being true if the user was successfully registered.
    */
  def register() = Action { request =>
    val json = request.body.asJson

    val username = (json.get \ "username").as[String].toLowerCase

    // Hashing the password using b-crypt, this is just a basic example.
    //TODO  The credentials should be passed in via BasicAuth - the current approach is insecure and unsuitable for a
    //TODO  production app.
    val ptPassword = (json.get \ "password").as[String]
    val hashedPass = LoginUtils.hashPassword(ptPassword)

    val userCollection = MongoUtils.getCollection(Constants.databaseName, Constants.userCollection)

    // Check no user exists with the given username
    val query = "username" $eq username
    if (userCollection.find(query).limit(1).nonEmpty) {
      Ok(Json.obj("success" -> false, "error" -> "The username has already been taken."))
    } else {

      // The username is unique, so save it and return the result
      val user = User(username, hashedPass, LoginUtils.generateAuthToken(), DateTime.now())
      val userDBO = user.getDBObject
      userCollection += userDBO

      Ok(Json.obj("success" -> true, "username" -> user.username, "authToken" -> user.authToken))
    }
  }

  /**
    * Authenticate a user
    *
    * @return An authentication token which must be passed with all further requests.
    */
  def authenticate() = Action { request =>
    val json = request.body.asJson

    if (json.isEmpty) BadRequest("No login parameters given")
    val username = (json.get \ "username").as[String]
    val password = (json.get \ "password").as[String]


    val userCollection = MongoUtils.getCollection(Constants.databaseName, Constants.userCollection)
    val userQuery = MongoDBObject("username" -> username)

    val user = userCollection.findOne(userQuery)

    if (user.isEmpty) {
      Ok(Json.obj("success" -> false, "error" -> "The Username or Password is invalid."))
    } else {
      val u = new User(user.get)
      if (!LoginUtils.validPassword(password, u.password)) {
        // If the password is invalid, send back a false authentication
        Ok(Json.obj("success" -> false, "error" -> "The Username or Password is invalid."))
      } else {
        // Generate a new auth token and reset the auth token date
        u.authToken = LoginUtils.generateAuthToken()
        u.authDate = DateTime.now()
        userCollection.update(userQuery, u.getDBObject)
        Ok(Json.obj("success" -> true, "username" -> u.username, "authToken" -> u.authToken))
      }
    }
  }

}
