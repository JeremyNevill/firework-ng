'use strict';

angular.module('fireworkNgApp')
    .controller('HeaderController', function ($scope, Azureservice) {
        $scope.isLoggedIn = Azureservice.isLoggedIn();
        $scope.AzureService = Azureservice;

        $scope.logout = function () {
            Azureservice.logout();
            $scope.isLoggedIn = false;
            console.log('Logout');
        };

        $scope.$watch('AzureService.isLoggedIn()', function (newVal) {
            $scope.isLoggedIn = newVal;
        });

    });
