angular.module('myApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'components/home/home.html',
                controller: 'HomeController'
            })
            .when('/about', {
                templateUrl: 'components/about/about.html',
                controller: 'AboutController'
            })
            .otherwise({ redirectTo: '/home' });
    }).service('DataService', function () {
        // Your service logic here
    });