/**
 * Created by root on 18/05/16.
 */
var module = angular.module('pammSkeleton.controllers');

/**
 * Controller which handles registration of a new user.
 */
module.controller('RegisterCtrl', ['$http', '$log', '$scope', '$state', 'loginService',
    function ($http, $log, $scope, $state, loginService) {

        var vm = this;

        // Define user model
        vm.user = {};

        /**
         * Called to register a user. Expects the users credentials to be present.
         * On successful registration, will return the user to the login screen.
         */
        vm.registerUser = function() {

            // Reset the error status
            vm.error = null;
            vm.success = null;

            var success = function(data) {
                console.log(data);
                vm.success = data["success"];
                if (vm.success) {
                    vm.user = {};
                    //TODO Store the user token and auto-login
                    $location.go("login");
                } else {
                    vm.error = data["error"];
                    vm.user.password = null;
                }
            };

            var error = function(error) {
                console.log(error);
            };

            loginService.registerUser(
                vm.user.name,
                vm.user.password,
                success,
                error);
        };
    }]);
