'use strict';

describe('home controller', function () {

    beforeEach(module('fireworkNgApp'));
    var $scope;

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller('HomeController', {
            $scope: $scope
        });
    }));

    it('has a happy message', function () {
        expect($scope.welcomeMessage).toEqual('Hello');
    });

    it('says bye', function () {
        expect($scope.byeMessage).toEqual('bye');
    });

});
