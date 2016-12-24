app.controller('allProductsCtrl', function($scope, $state, mainService) {
  //NOTE do forget to include the new service

    //$scope.state = $state;

    $scope.getAllProducts = function() {
        mainService.getAllProducts().then(function(response) {
            $scope.products = response.data;
            //$state.go('products');
        });
    };
    $scope.getAllProducts();



});
