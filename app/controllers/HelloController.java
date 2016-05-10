package controllers;

import play.mvc.Controller;
import play.mvc.Result;

/**
 * Created by markfearnley on 10/05/2016.
 */
public class HelloController extends Controller {

    public static Result helloWorld() {
        return ok("Hello World");
    }
}
