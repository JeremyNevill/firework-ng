'use strict';

angular.module('fireworkNgApp')
    .controller('MainController', function ($scope, Azureservice, $location) {

        $scope.newItem = {};
        $scope.fireworkItems = [];
        $scope.loading = true;
        $scope.editItem = null;
        $scope.orderProp = 'date';
        $scope.query = null;

        refreshItems();

        $scope.create = function () {
            Azureservice.insert('items', $scope.newItem)
                .then(function () {
                    $location.path("/timeline");
                }, function (err) {
                    console.error('Error: ' + err);
                    $scope.alerts.push({type: 'danger', msg: "Item failed to add"});
                })
        };

        $scope.edit = function (item) {
            $scope.editItem = item;
            $location.path('/edit/' + item.id);
        };

        $scope.filterByActor = function (actor) {
            $scope.query = actor;
        };

        $scope.filterByAction = function (action) {
            $scope.query = action;
        };

        $scope.clearFilter = function () {
            $scope.query = null;
        };

        $scope.delete = function (item) {
            Azureservice.del('items', item)
                .then(function () {
                    console.log('Delete successful');
                    refreshItems();
                    $scope.alerts.push({type: 'success', msg: "Item deleted successfully"});
                }, function (err) {
                    console.error('Error: ' + err);
                })
        };

        function refreshItems() {
            $scope.loading = true;
            Azureservice.query('items', {})
                .then(function (items) {
                    $scope.fireworkItems = items;
                    $scope.loading = false;
                }, function (err) {
                    console.error('Error: ' + err);
                    $scope.loading = false;
                });
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