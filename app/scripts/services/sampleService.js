/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../angular/angular.d.ts" />
'use strict';
var MyModule;
(function (MyModule) {
    var SampleService = (function () {
        function SampleService() {
            this.actor = 'fred';
            this.action = 'ran';
            this.message = '@' + this.actor + ' ' + this.action;
        }
        SampleService.prototype.getMessage = function () {
            return this.message;
        };
        return SampleService;
    })();
    MyModule.SampleService = SampleService;
})(MyModule || (MyModule = {}));

angular.module('myApp.sampleService', []).factory('sampleService', function () {
    return new MyModule.SampleService();
});
//# sourceMappingURL=sampleService.js.map
