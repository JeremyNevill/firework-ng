/// <reference path="./jquery/jquery.d.ts" />
/// <reference path="./angular/angular.d.ts" />

'use strict';

angular.module('myApp.dataFacade', []).factory("dataFacade", function ($http) {

    var _getMsgs = function () {
        return $http.get("msgs/msgs.json");
    };

    return {
        getMsgs: _getMsgs
    };
});
