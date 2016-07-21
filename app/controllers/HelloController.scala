package controllers

import login.{LoginUtils, AuthAction}
import play.api.mvc.{Action, Controller}
import utils.Constants

/**
  * Created by markfearnley on 10/05/2016.
  */
class HelloController extends Controller {

  def helloWorld = AuthAction { request =>
    // Each authenticated request holds the user object
    val user = request.user
    Ok(s"Hello ${user.username}")
  }

}
