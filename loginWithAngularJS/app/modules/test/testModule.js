define([
    "angular",
    "app/modules/test/controllers/mainCtrl",
    "app/modules/test/controllers/testCtrl",
], function (angular,mainCtrl,testCtrl) {

    var app = angular.module("TestModule", [])
        .controller("mainCtrl", mainCtrl)
        .controller("testCtrl", testCtrl);


    return app;
});
