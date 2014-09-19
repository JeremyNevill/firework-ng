'use strict';

describe('sample service', function () {

    var sampleService;

    beforeEach(module('myApp.sampleService'));
    beforeEach(inject(function (_sampleService_) {
        sampleService = _sampleService_;
    }));

    describe('message function', function () {
        it('should return a message', function () {
            
            expect(sampleService.getMessage()).toEqual('@fred skipped');
        });
    });

});

