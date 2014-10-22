'use strict';

angular.module('fireworkNgApp')
    .controller('HomeController', function ($scope) {
        $scope.welcomeMessage = 'Hello';
        $scope.byeMessage = 'bye';
    });
