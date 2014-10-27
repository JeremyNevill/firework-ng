/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />
'use strict';

module MyModule {
    export class ShorteeService {

        message:string;

        constructor(public actor?:string, public action?:string, public amount?:number, public units?:string, public date?:string) {
        }

        public getMessage():String {
            var msg = '';
            if (typeof(this.actor) != 'undefined') {
                msg = msg + '@' + this.actor;
            }
            if (typeof(this.action) != 'undefined') {
                msg = msg + ' ' + this.action;
            }
            if (typeof(this.amount) != 'undefined') {
                msg = msg + ' ' + this.amount.toString();
            }
            if (typeof(this.units) != 'undefined') {
                msg = msg + this.units;
            }
            if (typeof(this.date) != 'undefined') {
                msg = msg + ' ' + this.date;
            }
            this.message = msg;
            return this.message;
        }
    }
}

angular.module('myApp.shorteeService', [])
    .factory('shorteeService', ()=> {
        return new MyModule.ShorteeService();
    });
