'use strict';

angular.module('fireworkNgApp')
    .controller('AddController', function ($scope, Azureservice, $location, shorteeService) {

        $scope.newItem = {};
        $scope.loading = true;
        $scope.query = null;

        $scope.create = function () {
            Azureservice.insert('items', $scope.newItem)
                .then(function () {
                    $location.path("/timeline");
                }, function (err) {
                    console.error('Error: ' + err);
                    $scope.alerts.push({type: 'danger', msg: "Item failed to add"});
                })
        };

        $scope.isLoggedIn = Azureservice.isLoggedIn();

        $scope.alerts = [];

        $scope.addAlert = function () {
            $scope.alerts.push({msg: "Another alert!"});
        };

        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };

        $scope.shortee = function (item) {
            shorteeService.actor = item.actor;
            shorteeService.action = item.action;
            shorteeService.amount = item.amount;
            shorteeService.units = item.units;
            return shorteeService.getMessage();
        };

    });