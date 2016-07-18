'use strict';

(function() {

    var app = angular.module('pammSkeleton', [
        'pammSkeleton.controllers',
        'pammSkeleton.services',
        'ui.router' ]);

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
                        },
                        'content': {
                            templateUrl: 'assets/partials/login.html'
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

    angular.module('pammSkeleton.services', []);
    angular.module('pammSkeleton.controllers', []);
})();