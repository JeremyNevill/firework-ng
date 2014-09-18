/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../angular/angular.d.ts" />
'use strict';

module MyModule {
    export class SampleService {
        actor:string;
        message:string;
        action:string;

        constructor() {
            this.actor = 'fred';
            this.action='ran';
            this.message = '@' + this.actor + ' ' + this.action;
        }

        public getMessage():String {
            return this.message;
        }
    }
}

angular.module('myApp.sampleService', [])
    .factory('sampleService', ()=> {
        return new MyModule.SampleService();
    });
