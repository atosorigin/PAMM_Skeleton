'use strict';

(function() {

    var app = angular.module('pammSkeleton', [
        'pammSkeleton.controllers',
        'pammSkeleton.services',
        'ngRoute' ]);

    app.config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/home', {
                    templateUrl: 'assets/partials/home.html',
                    controller: "HomeController"
                })
                .otherwise({
                    redirectTo: '/home'
                });
          }]);
})();