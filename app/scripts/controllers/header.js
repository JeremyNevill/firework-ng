'use strict';

angular.module('fireworkNgApp')
    .controller('HeaderController', function ($scope, Azureservice, $location) {
        $scope.isLoggedIn = Azureservice.isLoggedIn();
        $scope.AzureService = Azureservice;

        $scope.logout = function () {
            Azureservice.logout();
            $scope.isLoggedIn = false;
            console.log('Logout');
            $location.path('#/login');
        };

        $scope.$watch('AzureService.isLoggedIn()', function (newVal) {
            $scope.isLoggedIn = newVal;
        });

    });
