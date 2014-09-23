'use strict';

angular.module('fireworkNgApp')
    .controller('AddController', function ($scope, Azureservice, $location, sampleService) {

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
            var ss=sampleService();  
            ss.actor=itemToConstruct.actor;
            return 'aaa';
        };

    });