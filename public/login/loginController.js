/**
 * Created by root on 18/05/16.
 */
var module = angular.module('pammSkeleton.controllers');

/**
 * Controller which handles authentication of a user.
 */
module.controller('LoginCtrl', ['$http', '$log', '$scope', '$state', 'loginService', 'authService',
    function ($http, $log, $scope, $state, loginService, authService) {

        var vm = this;

        // Define user model
        vm.user = {};

        /**
         * Called when the controller first loads. Clears out all cached user credentials.
         */
        vm.init = function() {
            // Ensure credentials aren't hanging around
            authService.clearCredentials();
        };

        /**
         * Authenticates a user. On Success, caches the returned auth token and redirects the user to the Trello screen.
         */
        vm.authenticateUser = function() {
            // Reset the errors
            vm.error = null;
            vm.success = null;

            var success = function(data) {
                // Check if it was successful
                if (data["success"]) {
                    authService.authenticate(data["username"], data["authToken"]);
                    $state.go("app.home");
                } else {
                    vm.authError = data["error"];
                }
            };

            var error = function(error) {
                console.log(error);
                vm.authError = "Server error - please try again.";
            };

            loginService.authenticateUser(
                vm.user.name,
                vm.user.password,
                success,
                error);
        };

        vm.init();
    }]);
