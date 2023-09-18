angular.module('myApp')
    .controller('AboutController', function ($scope, DataService) {
        $scope.aboutInfo = 'Learn more about us here.';
        console.log('AboutController is loaded.');

    });
