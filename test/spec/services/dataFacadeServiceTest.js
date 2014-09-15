'use strict';

describe('data service facade', function () {

    var dataFacade, $httpBackend;

    beforeEach(module('myApp.dataFacade'));
    beforeEach(inject(function (_dataFacade_, _$httpBackend_) {
        $httpBackend = _$httpBackend_;
        dataFacade = _dataFacade_;

        $httpBackend.expectGET('msgs/msgs.json').
            respond([
            {msg: 'Hello'},
            {msg: 'There'}
          ]);
      }));

    describe('msgs provider', function () {
        it('should get a couple of msgs', function () {
            expect(dataFacade.getMsgs().success(function (data, status) {
                expect(status).toBe(200);
                expect(data).toEqual([
                    {msg: 'Hello'},
                    {msg: 'There'}
                  ]);
              }));

            $httpBackend.flush();

          });
      });
  
    describe('msgs provider', function () {
        it('should get another couple of msgs', function () {
            expect(dataFacade.getMsgs().success(function (data, status) {
                expect(status).toBe(200);
                expect(data).toEqual([
                    {msg: 'Hello'},
                    {msg: 'There'}
                  ]);
              }));

            $httpBackend.flush();

          });
      });
    
  
  
  });