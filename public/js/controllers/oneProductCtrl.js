app.controller('oneProductCtrl', function($scope, $state, $stateParams, mainService) {
  //NOTE do forget to include the new service

  $scope.getProduct = function(){
      mainService.getProduct($stateParams.id).then(function(response){
      $scope.product = response.data[0];
      });
    }

  $scope.getProduct();

});
