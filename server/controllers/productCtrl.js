var app = require('../server.js');
var db = app.get('db');

module.exports = {

     getTeam: function(req, res, next) {
       db.team.read_team([req.query.id], function(err, team) {
         res.send(team)
       })
     },

     getTeams: function(req, res, next) {
       db.team.read_teams(function(err, teams) {
         res.send(teams)
       })
     },

    createProduct: function(req, res) {
        var params = [req.body.product_name, req.body.product_description, req.body.product_price, req.body.product_image_url];
        db.products.create_product(params,
            function(err, result) {
                // console.log(err);
                // console.log(result);
                res.status(200).json(result);
            });
    },
    updateProduct: function(req, res) {
        var params = [req.body.product_name, req.body.product_description, req.body.product_price, req.body.product_image_url, req.body.product_id];
        db.products.update_product(params,
            function(err, result) {
                // console.log(err);
                // console.log(result);
                res.status(200).json('Product has been updated.');
            });
    },
    deleteProduct: function(req, res) {
        var id = [req.params.id];
        db.products.delete_product(id,
            function(err, result) {
                // console.log(err);
                // console.log(result);
                res.status(200).json('Product has been deleted.');
            });
    },
    getProduct: function(req, res){
      var params = [req.params.id];
      db.products.read_product(params, function(err, product){
        res.status(200).send(product);
      });
    },
    getAllProducts: function(req, res) {
        db.products.read_products(
            function(err, result) {
                // console.log(err);
                // console.log(result);
                res.status(200).json(result);
            });
    }
};
