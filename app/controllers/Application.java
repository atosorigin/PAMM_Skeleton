package controllers;

import play.mvc.Controller;
import play.mvc.Result;
import views.html.Index;

/**
 * Created by markfearnley on 10/05/2016.
 */
public class Application extends Controller {

    public Result index() {
        return ok(Index.render());
    }
}
