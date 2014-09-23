'use strict';

describe('Controller: MainController', function () {

  // load the controller's module
  beforeEach(module('fireworkNgApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainController', {
      $scope: scope
    });
  }));

  //it('should have cheese on scope', function () {
  //   expect(scope.cheese).toBe('xxx');
  //});
});
