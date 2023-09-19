angular.module('myApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'components/home/home.html',
                controller: 'HomeController'
            })
            .when('/about', {
                templateUrl: 'components/about/about.html',
                controller: 'AboutController',
                resolve: {
                    // Add a resolve to redirect to 'subroute1' by default
                    redirectToSubroute1: function ($location, $route) {
                        if (!$route.current.params.subroute) {
                            $location.path('/about/aboutus');
                        }
                    }
                },
                subRoutes: {
                    'aboutus': {
                        templateUrl: 'components/about/aboutUs/aboutUs.html',
                        controller: 'aboutUsController'
                    },
                    'ourservices': {
                        templateUrl: 'components/about/ourServices/ourServices.html',
                        controller: 'ourServicesController'
                    }
                }
            })
            .otherwise({ redirectTo: '/home' });
    }).service('DataService', function () {
        // Your service logic here
    });