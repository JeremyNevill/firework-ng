/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />
'use strict';

module MyModule {
    export class ShorteeService {

        message:string;

        constructor(public actor?:string, public action?:string, 
                    public amount?:number, public units?:string, public date?:string) {
        }

        public getMessage():String {
            this.message = '@' + this.actor + ' ' + this.action + ' ' + this.amount.toString() + this.units + ' ' + this.date;
            return this.message;
        }
    }
}

angular.module('myApp.shorteeService', [])
    .factory('shorteeService', ()=> {
        return new MyModule.ShorteeService();
    });
