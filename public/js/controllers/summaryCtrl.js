app.controller('summaryCtrl', ['$scope', '$http', 'ngCart', function($scope, $state, $http, ngCart, mainService) {
  console.log('this is cart', ngCart);
    ngCart.setTaxRate(7.5);
    ngCart.setShipping(2.99);

}]);
