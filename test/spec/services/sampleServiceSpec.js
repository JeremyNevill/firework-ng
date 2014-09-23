'use strict';

describe('sample service', function () {

    var sampleService;

    beforeEach(module('myApp.sampleService'));
    beforeEach(inject(function (_sampleService_) {
        sampleService = _sampleService_;
    }));

    describe('message function', function () {
        it('should return a message', function () {
          sampleService.actor='fred';
          sampleService.action='skipped';
          sampleService.amount=3;
          sampleService.units='miles';
          expect(sampleService.getMessage()).toEqual('@fred skipped 3miles');
        });
    });
});