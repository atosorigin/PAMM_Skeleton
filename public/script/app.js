'use strict';

(function() {

    var app = angular.module('pammSkeleton', [
        'pammSkeleton.controllers',
        'pammSkeleton.services',
        'ui.router',
        'ngCookies',
        'base64',
        'ui.validate']);

    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/login');

            $stateProvider
                .state('login', {
                    url: '/login',
                    views: {
                        'header@': {
                            templateUrl: 'assets/partials/titlebar.html'
                        },
                        'content@': {
                            templateUrl: 'assets/login/login.html'
                        }
                    }
                })
                .state('register', {
                    url: '/register',
                    views: {
                        'header@': {
                            templateUrl: 'assets/partials/titlebar.html'
                        },
                        'content@': {
                            templateUrl: 'assets/login/register.html'
                        }
                    }
                })
                .state('app', {
                    url: '/',
                    views: {
                        'header': {
                            templateUrl: 'assets/partials/navbar.html'
                        }
                    }
                })
                .state('app.home', {
                    url: 'home',
                    views: {
                        'content@': {
                            templateUrl: 'assets/partials/home.html'
                        }
                    }
                })
                .state('app.about', {
                    url: 'about',
                    views: {
                        'content@': {
                            templateUrl: 'assets/partials/about.html'
                        }
                    }
                });
          }]);

    app.run(['$rootScope', '$location', 'authService', function($rootScope, $location, authService){
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
            var loggedIn = authService.isAuthorized();

            if  (toState.name != 'login' && !loggedIn) {
                //if you're not logged in and you try to go to anything other than the login page...
                $location.url('/login');
            } else if (toState.name == 'login' && loggedIn) {
                //if you're logged in and you try to go to the login page...
                $location.url('home');
            }
        });
    }]);

    angular.module('pammSkeleton.services', []);
    angular.module('pammSkeleton.controllers', []);

})();