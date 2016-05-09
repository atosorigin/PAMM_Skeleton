package controllers

import play.api.mvc.{Action, Controller}

object Application extends Controller {
  def index = Action {

    //This re-directs the default index action to server the index.html page
    MovedPermanently("/index.html")
  }
}