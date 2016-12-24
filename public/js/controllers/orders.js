app.controller('orders', function($scope, $state, ngCart, mainService) {
console.log('this is cart', ngCart);
  ngCart.setTaxRate(7.5);
  ngCart.setShipping(2.99);

   $scope.createOrder = function(order){
      mainService.createOrder(order).then(function(response){
        $scope.product = response.data;
      })
    }

    $scope.createBill = function(bill){
       mainService.createBill(bill).then(function(response){
         $scope.product = response.data;
       })
     }

  //$scope.createOrder();

 })
