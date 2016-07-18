'use strict';

(function() {

    var app = angular.module('pammSkeleton', [
        'pammSkeleton.controllers',
        'pammSkeleton.services',
        'ngRoute' ]);

    app.config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/login', {
                    templateUrl: 'assets/partials/login.html'
                })
                .when('/register', {
                    templateUrl: 'assets/partials/register.html'
                })
                .when('/home', {
                    templateUrl: 'assets/partials/home.html',
                    controller: "HomeCtrl"
                })
                .when('/about', {
                    templateUrl: 'assets/partials/about.html',
                    controller: "AboutCtrl"
                })
                .otherwise({
                    redirectTo: '/home'
                });
          }]);

    angular.module('pammSkeleton.services', []);
    angular.module('pammSkeleton.controllers', []);
})();