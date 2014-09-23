'use strict';
var MyModule;
(function (MyModule) {
    var SampleService = (function () {
        function SampleService(actor, action, amount, units) {
            this.actor = actor;
            this.action = action;
            this.amount = amount;
            this.units = units;
        }
        SampleService.prototype.getMessage = function () {
            this.message = '@' + this.actor + ' ' + this.action + ' ' + this.amount.toString() + this.units;
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
