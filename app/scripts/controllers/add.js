'use strict';

angular.module('fireworkNgApp')
    .controller('AddController', function ($scope, Azureservice, $location) {

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

        $scope.shortee = function (itemToConstruct) {
            var shorteeMessage = '';
            if (typeof itemToConstruct.actor != 'undefined') {
                shorteeMessage = shorteeMessage + '@' + itemToConstruct.actor;
            }

            if (typeof itemToConstruct.action != 'undefined') {
                shorteeMessage = shorteeMessage + ' ' + itemToConstruct.action;
            }

            if (typeof itemToConstruct.actee != 'undefined') {
                shorteeMessage = shorteeMessage + ' @' + itemToConstruct.actee;
            }


            if (typeof itemToConstruct.amount != 'undefined') {
                shorteeMessage = shorteeMessage + ' ' + itemToConstruct.amount;
            }

            if (typeof itemToConstruct.units != 'undefined') {
                shorteeMessage = shorteeMessage + itemToConstruct.units;
            }

            if (typeof itemToConstruct.date != 'undefined') {
                shorteeMessage = shorteeMessage + ' ' + itemToConstruct.date;
            }

            return shorteeMessage;
        };

    });