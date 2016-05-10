package controllers

import play.api.mvc.{Action, Controller}

/**
  * Created by markfearnley on 10/05/2016.
  */
object HelloController extends Controller {

  def helloWorld = Action {
    Ok("Hello World")
  }

}
