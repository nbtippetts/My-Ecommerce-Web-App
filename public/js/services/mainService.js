app.service('mainService', function($http, $q) {


  this.getProduct = function(id) {
      return $http({
        method: 'GET',
        url: 'http://localhost:4500/api/products/' + id
      });
  }

  this.getAllProducts = function(){
    var deferredMaster = $q.defer();
      $http({
        method: 'GET',
        url: 'http://localhost:4500/api/products/'
      }).then(function(response){
        deferredMaster.resolve(response)
      });
      return deferredMaster.promise;
    }


    this.createProduct = function(product){
       return $http({
         url: 'http://localhost:4500/api/product/',
         method: 'POST',
         data: product
       });
    }

    this.getOrder = function(id) {
        return $http({
          method: 'GET',
          url: 'http://localhost:4500/api/orders/' + id
        });
    }

    this.createOrder = function(order){
       return $http({
         url: 'http://localhost:4500/api/orders/',
         method: 'POST',
         data: order
       });
    }

    this.createBill = function(bill){
       return $http({
         url: 'http://localhost:4500/api/bills/',
         method: 'POST',
         data: bill
       });
    }

  //   this.create = function(product){
  //     return $http({
  //       url: '/api/product',
  //       method: 'POST',
  //       data: product
  //     });
  //  }



  //this service holds all of the http call to the server for now
  // this.register = function(user) {
  //   console.log(user);
  //   return $http({
  //     method: 'POST',
  //     url: '/auth/local/register',
  //     data: user
  //   })
  // }
  //
  //
  // this.loginUser = function(user) {
  //   return $http({
  //     method: 'POST',
  //     url: '/auth/local',
  //     data: user
  //   })
  // }


  // this.logout = function() {
  //   return $http({
  //     method: 'GET',
  //     url: '/auth/logout'
  //   })
  //   .then(function(res) {
  //     //console.log('logout', res)
  //     return res.data;
  //   })
  //   .catch(function(err) {
  //     console.log(err);
  //   })
  // }

  // this.read = function(){
  //   //console.log("this is user,", user)
  //   return $http({
  //     method: 'GET',
  //     url: '/api/users'
  //   });
  // }

  // this.getUserId = function(id){
  //   return $http({
  //     method: 'GET',
  //     url: '/api/user/user:id?id=' + id
  //   });
  // }

  this.getTeams = function(){
    return $http({
      method: 'GET',
      url: '/api/teams'
    });
  }

  this.getTeam = function(id){
    return $http({
      method: 'GET',
      url: '/api/teams/team:id?id=' + id
    });
  }

})
