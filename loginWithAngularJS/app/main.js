require.config({
    baseUrl: "/",
    paths: {
        "angular": "vendor/angular/angular",
        "bootstrap": "vendor/bootstrap3/js/bootstrap",
        "jquery": "vendor/jquery/jquery.min",
        "ui.router": "angular3party/ui.router",
    },
    shim: {
        "angular": {
            exports: "angular"
        },
        "jquery": {
            exports: "$"
        },
        "bootstrap": {
            deps: ["jquery"]
        },
        "ui.router": {
            deps: ["angular"]
        },
        "oc.lazyLoad": {
            deps: ["angular", "ui.router"]
        },
        "customLazyLoader": {
            deps: ["oc.lazyLoad"]
        }
    },
    deps: ["app/bootstrap"]
});
