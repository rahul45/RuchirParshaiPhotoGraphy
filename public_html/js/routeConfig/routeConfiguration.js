var m = angular.module("routeapp", ['ngRoute', 'sliderApp']);

m.config(function ($routeProvider) {
    $routeProvider.when("/", {templateUrl: 'features/home/home.html', controller: 'SliderController'});
//    $routeProvider.when("/login",{templateUrl:'partials/login.html', controller:'LoginController'});
//    $routeProvider.when("/greet",{templateUrl:'partials/greet.html', controller:'RouteController'});
//    $routeProvider.when("/test",{templateUrl:'partials/test.html'});
    $routeProvider.when("/home", {templateUrl: 'features/home/home.html', controller: 'SliderController'});
    $routeProvider.otherwise({template: '<h1>Working in progress..</h1>'});
//    $routeProvider.when("/greet/:myparam",{templateUrl:'partials/greet.html', controller:'RouteController'});
//    $routeProvider.when("/admin",{templateUrl:'partials/admin.html'});
//    $routeProvider.when("/guest",{templateUrl:'partials/others.html'});
});

m.controller("menuController", function ($scope) {
    $scope.hideThisOne = false;
    console.log("inside the menu controller");
    $scope.menustatus="Menu";
    $scope.showHideOneMenu = function() {
        if ($scope.hideThisOne === false) {
            $scope.hideThisOne = true;
             $scope.menustatus="Hide Menu";
        }else{
             $scope.hideThisOne = false;
             $scope.menustatus="Menu";
        }
        console.log("inside the menu controller");
    }
});