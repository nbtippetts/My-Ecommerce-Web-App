app.directive('billingDir', function(){
  var linkFunction = function(scope, element, attributes) {
    var checkbox = element.children();
    $(checkbox).on("click", function() {
      $(".billing-container").toggle();
    });
  };

  return {
    restrict: "E",
    link: linkFunction
  };
})
