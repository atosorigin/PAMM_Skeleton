/**
 * Created by root on 18/05/16.
 */
var module = angular.module('pammSkeleton.controllers');

/**
 * Controller which handles authentication of a user.
 */
module.controller('LoginCtrl', ['$http', '$log', '$scope', '$rootScope', '$state', 'loginService',
    function ($http, $log, $scope, $rootScope, $state, loginService) {

        var vm = this;

        // Define user model
        vm.user = {};

        /**
         * Called when the controller first loads. Clears out all cached user credentials.
         */
        vm.init = function() {
            // Ensure the user is logged out
            $rootScope.authToken = null;
            $rootScope.username = null;
        };

        /**
         * Authenticates a user. On Success, caches the returned auth token and redirects the user to the Trello screen.
         */
        vm.authenticateUser = function() {
            // Reset the errors
            vm.error = null;
            vm.success = null;

            var success = function(data) {
                console.log(data);
                // Check if it was successful
                if (data["success"]) {
                    $rootScope.authToken = data["authToken"];
                    $rootScope.username = data["username"];
                    $state.go("nav.home");
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
