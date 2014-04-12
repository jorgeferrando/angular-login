define([
    "angular", 
    "ui.router", 
    "app/states",
    'app/modules/test/testModule',
    'app/modules/login/loginModule',
], function (angular, router, states, testModule, loginModule) {
    "use strict";
    var app = angular.module("app", ['ui.router','TestModule','loginModule']);
    app
        .config([
            "$stateProvider", "$locationProvider", "$urlRouterProvider",
            function ($stateProvider, $locationProvider, $urlRouterProvider) {
                states.forEach(function (state) {
                    $stateProvider.state(state.name, state.state);
                });
                // Without server side support html5 must be disabled.
                $urlRouterProvider.otherwise('/');
                //return $locationProvider.html5Mode(false);
            }
        ])
        .run(['$state', '$rootScope', 'loginService',function ($state, $rootScope,loginService) {
            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                if (toState.authenticate && !loginService.isAuth) {
                    $state.go("login");
                    event.preventDefault();
                }
            });
        }]);

    return app;
});
