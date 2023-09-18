angular.module('myApp')
    .service('DataService', function ($http) {
        this.getDataFromApi = function () {
            return $http.get('https://dummyjson.com/products'); // Replace with your API endpoint
        };
    });
