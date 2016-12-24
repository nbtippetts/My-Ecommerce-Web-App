app.controller('cartCtrl', ['$scope', '$http', 'ngCart', function($scope, $http, ngCart, mainService) {
  console.log('this is cart', ngCart);
    ngCart.setTaxRate(7.5);
    ngCart.setShipping(2.99);
}]);
