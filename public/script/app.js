'use strict';

(function() {

    var app = angular.module('pammSkeleton', [
        'pammSkeleton.controllers',
        'pammSkeleton.services',
        'ngRoute' ]);
/*
    app.config(function($routeProvider) {
        $routeProvider.when("/", {
            templateUrl : "partials/home.html",
            controller : "HomeController",
            controllerAs : "homeCtrl"
        })
    });
    */

    app.config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: "HomeController"});
            $routeProvider.otherwise({redirectTo: '/home'});
          }]);

})();