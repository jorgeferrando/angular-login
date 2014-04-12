define(["app/customLazyLoader"], function (lazyLoader) {
    "use strict";
    return [
        {
            name: "root",
            state: {
                url: "/",
                views: {
                    "mainView": {
                        templateUrl: "js/app/main.html"
                    }
                }
            }
        }, 
        {
            name: "test1",
            state: {
                url: "/test1",
                views: {
                    "mainView": {
                        templateUrl: "js/app/main.html"
                    }
            }
        }, 
            {
            name: "test1",
            state: {
                url: "/test1",
                views: {
                    "mainView": {
                        templateUrl: "js/app/main.html"
                    }
            }
        }
    ];
});
