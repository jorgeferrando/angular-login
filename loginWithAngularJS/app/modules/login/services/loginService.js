define([], function () {

    function loginService() {

        function login(user) {
            return {
                data: user,
                error: false,
                errorMsg: ""
            }
        }

        var isAuth = false;

        return {
            isAuth: isAuth,
            login:login
        }

    }

    return [loginService];
});