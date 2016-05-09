package controllers

import play.api.mvc.{Action, Controller}
import com.mongodb.casbah.Imports._

object Application extends Controller {
  def index = Action {

    Ok(views.html.Index())
  }

  def helloMongo = Action {
    val mongoClient =  MongoClient()
    val mongoDB = mongoClient("casbah_test")
    val collection = mongoDB("hello_play")

    val q = "viewCount" $exists true
    val counts = for (x <- collection.find(q)) yield x

    if (counts.isEmpty) {
      val newCount = MongoDBObject("viewCount" -> 1)
      collection += newCount
    } else {
      val count = counts.next().getAs[Int]("viewCount").get + 1
      val newCount = MongoDBObject("viewCount" -> count)
      collection.update(q, newCount)
    }

    Ok("Maybe done?")
  }
}