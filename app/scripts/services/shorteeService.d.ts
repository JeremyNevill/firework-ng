/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />
declare module MyModule {
    class ShorteeService {
        public actor: string;
        public action: string;
        public amount: number;
        public units: string;
        public date: string;
        public message: string;
        constructor(actor?: string, action?: string, amount?: number, units?: string, date?: string);
        public getMessage(): String;
    }
}
