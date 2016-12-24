app.directive('clearCartDir', function($http, ngCart){
  var linkFunction = function(scope, element, attributes) {
    var clear = element.children();
    $(clear).on("click", function() {
      ngCart.empty();
    });
  };

  return {
    restrict: "E",
    link: linkFunction
  };
})
