var thisApp = angular.module('waitStaff', ['ngRoute', 'ngAnimate']);

thisApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl : 'views/home.html',
    controller : 'HomeCtrl' })

  .when('/new-meal', {
    templateUrl : 'views/new-meal.html',
    controller : 'NewMealCtrl' })

  .when('/my-earnings', {
    templateUrl : 'views/my-earnings.html',
    controller : 'MyEarningsCtrl' })

  .otherwise({
    redirectTo : '/home'
  });
}]);

thisApp.run(function($rootScope, $timeout) {
  $rootScope.$on('$routeChangeStart', function() {
    $rootScope.isLoading = true;
    });
  $rootScope.$on('$routeChangeSuccess', function() {
    $timeout(function() {
      $rootScope.isLoading = false;
      }, 1000);
    });
});

thisApp.factory('Data', function() {
  return {};
});

thisApp.controller('HomeCtrl', function($scope) {

});

thisApp.controller('NewMealCtrl', function($scope) {

    $scope.subtotal = 0;
    $scope.tip = 0;
    $scope.total = 0;
    $scope.tip_total = 0;
    $scope.meal_count = 0;
    $scope.average_tip = 0;

    $scope.submit = function() {
      if($scope.myForm.$valid) {
        console.log('The form is valid');
        $scope.subtotal = $scope.meal_price + ($scope.meal_price * ($scope.tax_rate / 100));
        $scope.tip = $scope.subtotal * ($scope.tip_percentage / 100);
        $scope.total = $scope.subtotal + $scope.tip;
        $scope.tip_total = $scope.tip + $scope.tip_total;
        $scope.meal_count++;
        $scope.average_tip = $scope.tip_total / $scope.meal_count;
        $scope.meal_price = '';
        $scope.tax_rate = '';
        $scope.tip_percentage = '';

      } else {
        console.log('The form is invalid');
      }
    };

    $scope.cancel = function() {
      $scope.meal_price = '';
      $scope.tax_rate = '';
      $scope.tip_percentage = '';
    }

    $scope.reset= function() {
      $scope.meal_price = '';
      $scope.tax_rate= '';
      $scope.tip_percentage = '';
      $scope.subtotal = '';
      $scope.tip = '';
      $scope.total = '';
      $scope.tip_total = '';
      $scope.meal_count= '';
      $scope.average_tip = '';
    }

});

thisApp.controller('MyEarningsCtrl', function($scope) {

  $scope.subtotal = 0;
  $scope.tip = 0;
  $scope.total = 0;
  $scope.tip_total = 0;
  $scope.meal_count = 0;
  $scope.average_tip = 0;

  $scope.submit = function() {
    if($scope.myForm.$valid) {
      console.log('The form is valid');
      $scope.subtotal = $scope.meal_price + ($scope.meal_price * ($scope.tax_rate / 100));
      $scope.tip = $scope.subtotal * ($scope.tip_percentage / 100);
      $scope.total = $scope.subtotal + $scope.tip;
      $scope.tip_total = $scope.tip + $scope.tip_total;
      $scope.meal_count++;
      $scope.average_tip = $scope.tip_total / $scope.meal_count;
      $scope.meal_price = '';
      $scope.tax_rate = '';
      $scope.tip_percentage = '';

    } else {
      console.log('The form is invalid');
    }
  };

  $scope.cancel = function() {
    $scope.meal_price = '';
    $scope.tax_rate = '';
    $scope.tip_percentage = '';
  }

  $scope.reset= function() {
    $scope.meal_price = '';
    $scope.tax_rate= '';
    $scope.tip_percentage = '';
    $scope.subtotal = '';
    $scope.tip = '';
    $scope.total = '';
    $scope.tip_total = '';
    $scope.meal_count= '';
    $scope.average_tip = '';
  }

});
