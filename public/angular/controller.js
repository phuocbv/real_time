var bookWishlistAppControllers = angular.module('bookWishlistAppControllers', []);

bookWishlistAppControllers.controller('LoginController', function ($scope, $http, $location, userService) {
    $scope.login = function() {
        userService.login(
            $scope.email, $scope.password,
            function(response) {
            $location.path('/');
            },
            function(response) {
                alert('Something went wrong with the login process. Try again later!');
            }
        );
    }
});

bookWishlistAppControllers.controller('SignupController', function ($scope, $http, $location, userService) {
    $scope.signup = function() {
        //$location.path('/');
        userService.signup($scope.name, $scope.email, $scope.password, function(response) {
            alert('Great! You are now signed in! Welcome, ' + $scope.name + '!');
            $location.path('/');
        },
        function(response){
            alert('Something went wrong with the signup process. Try again later.');
        });
    }

    if(userService.checkIfLoggedIn()) $location.path('/');
});

bookWishlistAppControllers.controller('MainController', ['$scope', '$http', function ($scope, $http) {

}]);
