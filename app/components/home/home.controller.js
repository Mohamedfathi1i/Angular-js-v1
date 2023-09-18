// angular.module('myApp')
//     .controller('HomeController', function ($scope, DataService) {
//         $scope.message = 'Welcome to the Home Page!';
//     });


angular.module('myApp')
    .controller('HomeController', function ($scope, DataService) {
        $scope.apiData = {}; // Initialize an empty object to store the API response

        // Fetch data from the API
        DataService.getDataFromApi()
            .then(function (response) {
                // Success callback
                $scope.apiData = response.data.products;
                console.log(response.data.products)
            })
            .catch(function (error) {
                // Error callback
                console.error('Error fetching data from API:', error);
            });
    });
