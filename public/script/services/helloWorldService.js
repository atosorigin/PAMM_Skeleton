'use strict';

var module = angular.module('pammSkeleton.services');

// Example service which makes a GET call to our Play service, and returns the data as-is.
module.factory('helloWorldService', ["$http", "$rootScope", function($http, $rootScope) {
    return $http.get("/ws/hello", {
        headers: { 'Authorization': 'Bearer ' + window.btoa($rootScope.username + ':' + $rootScope.authToken) }
    })
        .success(function(data) {
          return data;
        })
        .error(function(err) {
          return err;
        });
}]);