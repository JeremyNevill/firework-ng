/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />
'use strict';
var MyModule;
(function (MyModule) {
    var ShorteeService = (function () {
        function ShorteeService(actor, action, amount, units) {
            this.actor = actor;
            this.action = action;
            this.amount = amount;
            this.units = units;
        }
        ShorteeService.prototype.getMessage = function () {
            this.message = '@' + this.actor + ' ' + this.action + ' ' + this.amount.toString() + this.units;
            return this.message;
        };
        return ShorteeService;
    })();
    MyModule.ShorteeService = ShorteeService;
})(MyModule || (MyModule = {}));
angular.module('myApp.shorteeService', []).factory('shorteeService', function () {
    return new MyModule.ShorteeService();
});
//# sourceMappingURL=shorteeService.js.map