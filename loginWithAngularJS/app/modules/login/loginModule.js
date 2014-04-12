define([
    "angular",
    "app/modules/login/controllers/loginCtrl",
    "app/modules/login/services/loginService",
    "app/modules/login/directives/loginDirective",
], function (angular,loginCtrl,loginService,loginDirective) {

    var app = angular.module("loginModule", [])
        .factory("loginService", loginService)
        .directive("loginForm", loginDirective)
        .controller("loginCtrl", loginCtrl);
    
    return app;
});
