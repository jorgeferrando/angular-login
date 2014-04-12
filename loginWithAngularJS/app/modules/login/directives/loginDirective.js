define([], function () {
    return function (){
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'app/modules/login/directives/form.html',
            scope: {
                email: "=",
                password: "=",
                doLogin: "&"
            }
        }
    }
})