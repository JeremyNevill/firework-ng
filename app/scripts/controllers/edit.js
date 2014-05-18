'use strict';

angular.module('fireworkNgApp')
    .controller('EditController', function ($scope, Azureservice, $location, $routeParams) {

        $scope.loading = true;
        $scope.itemId = $routeParams.itemId;
        $scope.isLoggedIn = Azureservice.isLoggedIn();
        $scope.alerts = [];

        getEditItem();

        function getEditItem() {
            Azureservice.getSingleItem('items', $scope.itemId)
                .then(function (editItem) {
                    console.log('Lookup successful');
                    $scope.editItem = editItem;
                }, function (err) {
                    console.error('Error: ' + err);
                })
        };

        $scope.update = function () {
            Azureservice.update('items', $scope.editItem)
                .then(function () {
                    console.log('Update successful');
                    $scope.alerts.push({type: 'success', msg: "Item updated successfully"});
                }, function (err) {
                    console.error('Error: ' + err);
                    $scope.alerts.push({type: 'danger', msg: "Item failed to update"});
                })
        };

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