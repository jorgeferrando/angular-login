define([
    "angular"
], function (angular) {
    "use strict";
    var ctrl = ['$scope', '$state', 'loginService',
        function ($scope, $state, loginService) {
            $scope.user = {};
            $scope.user.email = '';
            $scope.user.password = '';

            $scope.doLogin = function doLogin(user) {

                var result = loginService.login(user);

                if (result.error) {
                    loginService.isAuth = false;
                } else {
                    loginService.isAuth = true;
                    $state.go("test1");

                }
            }
        }
    ];

    return ctrl;
});
