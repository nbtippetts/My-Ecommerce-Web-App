app.controller('summaryCtrl',function($scope, $state, $stateParams, $http, ngCart, mainService) {

  ngCart.setTaxRate(7.5);
  ngCart.setShipping(2.99);


  $scope.getOrder = function(){
      mainService.getOrder($stateParams.id).then(function(response){
        console.log('this is order id', response);
        $scope.ordering = response.data.pop();
      });
    }

    $scope.getOrder();


});
