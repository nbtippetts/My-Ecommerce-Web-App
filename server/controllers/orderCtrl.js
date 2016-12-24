var app = require('../server');
var db = app.get('db');

module.exports = {
    createOrder: function(req, res, next) {
        db.orders.create_order([req.body.order_first_name, req.body.order_last_name, req.body.order_email, req.body.order_phone, req.body.order_address, req.body.order_city, req.body.order_state, req.body.order_zip, req.body.order_country], function(err, order) {
                console.log(err);
                console.log(order);
                res.send(order);
            });
    },
    updateOrder: function(req, res) {
      var params = [req.body.order_first_name, req.body.order_last_name, req.body.order_email, req.body.order_phone, req.body.order_address, req.body.order_city, req.body.order_state, req.body.order_zip, req.body.order_country, req.body.order_id];
        db.orders.update_order(params,
            function(err, result) {
                console.log(err);
                console.log(result);
                res.status(200).json('Order has been updated.');
            });
    },
    deleteOrder: function(req, res) {
        var id = [req.params.id];
        db.orders.delete_order(id,
            function(err, result) {
                console.log(err);
                console.log(result);
                res.status(200).json('Order has been deleted.');
            });
    },
    getOrder: function(req, res) {
        var id = [req.query.id];
        db.orders.read_order(id,
            function(err, result) {
                console.log(err);
                console.log(result);
                res.status(200).json(result);
            });
    },
    getAllOrders: function(req, res) {
        db.orders.read_orders(
            function(err, result) {
                console.log(err);
                console.log(result);
                res.status(200).json(result);
            });
    }
};
