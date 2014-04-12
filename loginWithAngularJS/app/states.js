define([], function () {
    "use strict";
    return [
        {
            name: "root",
            state: {
                url: "/",
                templateUrl: "app/modules/test/partials/test-template.html",
                controller: "mainCtrl",
                authenticate: false
            }
        }, 
        {
            name: "test1",
            state: {
                url: "/test",
                templateUrl: "app/modules/test/partials/test-template2.html",
                controller: "testCtrl",
                authenticate: true
            }
        }, 
        {
            name: "login",
            state: {
                url: "/login",
                templateUrl: "app/modules/login/partials/login.html",
                controller: "loginCtrl",
                authenticate: false
            }
        }
    ];
});
