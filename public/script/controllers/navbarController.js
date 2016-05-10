'use strict';

/* NavBarController */
/* Used by the Nav Bar to control the currently active page */

var module = angular.module('pammSkeleton.controllers');
module.controller('NavBarController', [ '$location', '$log', '$scope',
    function($location, $log, $scope) {

        //returns true is the location passed in, equals the current location path
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }]);