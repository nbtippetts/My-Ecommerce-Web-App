app.controller('orderCtrl', function($scope, $state, $stateParams, $http, ngCart, mainService) {
console.log('this is cart', ngCart);
  ngCart.setTaxRate(7.5);
  ngCart.setShipping(2.99);


   $scope.createOrder = function(order) {
      mainService.createOrder(order).then(function(response){
        console.log('create Order', response);
        $scope.orders = response.data;

      })
    }

    $scope.createBill = function(bill) {
       mainService.createBill(bill).then(function(response){
         $scope.orders = response.data;
       })
     }

    //$scope.createOrder();

 })
