/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />
'use strict';

module MyModule {
    export class SampleService {

        message: string;

        constructor(public actor?: string, public action?: string,
            public amount?: number, public units?: string)
        { }

        public getMessage(): String {
            this.message = '@' + this.actor + ' ' + this.action + ' ' + this.amount.toString() + this.units;
            return this.message;
        }
    }
} 

angular.module('myApp.sampleService', [])
    .factory('sampleService', ()=> {
        return new MyModule.SampleService();
    });
