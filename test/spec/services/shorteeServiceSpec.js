'use strict';

describe('sample service', function () {

    var shorteeService;

    beforeEach(module('myApp.shorteeService'));
    beforeEach(inject(function (_shorteeService_) {
        shorteeService = _shorteeService_;
    }));

    describe('message function', function () {
        it('should return a valid message', function () {
            shorteeService.actor = 'fred';
            shorteeService.action = 'skipped';
            shorteeService.amount = 3;
            shorteeService.units = 'miles';
            shorteeService.date ='01/jan/2012';
            expect(shorteeService.getMessage()).toEqual('@fred skipped 3miles 01/jan/2012');
        });
    });

    describe('message function', function () {
        it('should return another valid message', function () {
            shorteeService.actor = 'JANE';
            shorteeService.action = 'Ran';
            shorteeService.amount = 3.4;
            shorteeService.units = 'feet';
          shorteeService.date ='22/feb/2000';
            expect(shorteeService.getMessage()).toEqual('@JANE Ran 3.4feet 22/feb/2000');
        });
    });

});