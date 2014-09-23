/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />
'use strict';

module MyModule {
    export class SampleService {
        actor:string;
        action:string;
		actee: string;
		amount: number;
		units: string;
		message:string;

        constructor(actor: string, action:string,
		amount:number, units:string) 
		{
            this.actor = actor;
            this.action = action;
			this.amount = amount;
			this.units = units;
			this.message = '@' + this.actor + ' ' + this.action + ' ' + this.amount.toString() + this.units;
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
