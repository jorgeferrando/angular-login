define([
    "angular"
], function (angular) {
    "use strict";
    var ctrl = ['$scope',
        function ($scope) {
            $scope.testMsg = "test view";
        }
    ];

    return ctrl;
});
