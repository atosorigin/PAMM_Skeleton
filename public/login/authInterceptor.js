module.factory('authInterceptor', ['authService', '$injector', '$q', function(authService, $injector, $q) {
    var sessionInjector = {
        request: function(config) {
            if (authService.isAuthorized) {
                config.headers['Authorization'] = 'Bearer '
                    + window.btoa(authService.getUsername() + ':' + authService.getAuthToken());
            }
            return config;
        },

        responseError: function(response) {
            if (response.status == 401) {
                $injector.get('$state').go("login");
                return $q.reject(response);
            }

            return response;
        }
    };
    return sessionInjector;
}]);

module.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
}]);