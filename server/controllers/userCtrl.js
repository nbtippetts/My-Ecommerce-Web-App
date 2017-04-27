var app = require('../server');

  //create new user

  module.exports = {

  create: function(req, res) {
    var newUser = new User(req.body);
    newUser.save(function(err, result) {
      if (err) return res.send(err);
      else res.send(result);
    });
  },

  read: function(req, res){
   User.find(req.query)
   .exec()
   .then(function(err, result){
     if(err){
       console.log(err);
       res.send(err);
     }
     else {
       console.log('get ctrl');
       res.send(result);
     }
   });
 },

  readOne: function(req, res) {
    User.findById(req.params.id)
    .exec(function(err, result) {
      if (err) return res.send(err);
      else res.send(result);
    });
  },

  update: function(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) return res.send(err);
      else res.send(result);
    });
  },

  updateCart: function(req, res) {
    var products = req.body.products;

    for (var i = products.length - 1; i >= 0; i--){
      if (products[i].qty < 1){
        products.splice(i, 1);
      }
    }

    User.findByIdAndUpdate(req.params.id, {cart: {products: products}}, function(err, result) {
      if (err) return res.send(err);
      else res.send(result);
    });
  },

  delete: function(req, res) {
    User.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.send(err);
      else res.send(result);
    });
  },
  read: function(req, res, next){
    var db = app.get('db');

    db.get_userByUsername(function(err, user){
          res.send(user);
           console.log("backendCTRL this is user", user);
     })
  },

  //this function is for the sign up form to add add new users to the database

  getUserId: function(req, res, next){
    var db = app.get('db');

    db.get_userId([req.query.id], function(err, user){
    //  console.log("backend CTRL this is err", err)
      console.log("backendCTRL this is user id", user)
      res.send(user)
    })
  }
}
