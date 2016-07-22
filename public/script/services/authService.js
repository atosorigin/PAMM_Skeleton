/**
 * Created by mfearnley on 22/07/16.
 */
'use strict';

var module = angular.module('pammSkeleton.services');

// Service which handles authentication of the user throughout the app
/**
 * Service which handles registration and authentication of a user.
 */
module.factory('authService', [function() {

    var factory = {}

    var username = null;
    var authToken = null;

    factory.isAuthorized = function() {
        return username && authToken;
    }

    factory.authenticate = function(user, token) {
        username = user;
        authToken = token;
    }

    factory.getUsername = function() {
        return username;
    }

    factory.getAuthToken = function() {
        return authToken;
    }

    factory.clearCredentials = function() {
        username = null;
        authToken = null;
    }

    return factory;
}]);