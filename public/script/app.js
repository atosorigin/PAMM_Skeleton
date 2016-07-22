'use strict';

(function() {

    var app = angular.module('pammSkeleton', [
        'pammSkeleton.controllers',
        'pammSkeleton.services',
        'ui.router',
        'ngCookies',
        'base64']);

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
                            templateUrl: 'assets/partials/login.html'
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
                            templateUrl: 'assets/partials/register.html'
                        }
                    }
                })
                .state('nav', {
                    url: '/',
                    views: {
                        'header': {
                            templateUrl: 'assets/partials/navbar.html'
                        }
                    }
                })
                .state('nav.home', {
                    url: 'home',
                    views: {
                        'content@': {
                            templateUrl: 'assets/partials/home.html'
                        }
                    }
                })
                .state('nav.about', {
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
                $location.url('/login');
            }
        });
    }]);

    angular.module('pammSkeleton.services', []);
    angular.module('pammSkeleton.controllers', []);

})();