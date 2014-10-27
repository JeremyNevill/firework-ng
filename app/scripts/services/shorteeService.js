'use strict';
var MyModule;
(function (MyModule) {
    var ShorteeService = (function () {
        function ShorteeService(actor, action, amount, units, date) {
            this.actor = actor;
            this.action = action;
            this.amount = amount;
            this.units = units;
            this.date = date;
        }
        ShorteeService.prototype.getMessage = function () {
            var msg = '';
            if (typeof (this.actor) != 'undefined') {
                msg = msg + '@' + this.actor;
            }
            if (typeof (this.action) != 'undefined') {
                msg = msg + ' ' + this.action;
            }
            if (typeof (this.amount) != 'undefined') {
                msg = msg + ' ' + this.amount.toString();
            }
            if (typeof (this.units) != 'undefined') {
                msg = msg + this.units;
            }
            if (typeof (this.date) != 'undefined') {
                msg = msg + ' ' + this.date;
            }
            this.message = msg;
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
