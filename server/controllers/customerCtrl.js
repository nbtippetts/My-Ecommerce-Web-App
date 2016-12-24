var app = require('../server');
var db = app.get('db');

module.exports = {
    createCustomer: function(req, res) {
      var params = [req.body.customer_first_name, req.body.customer_last_name, req.body.customer_password, req.body.customer_email, req.body.customer_phone, req.body.customer_address, req.body.customer_city, req.body.customer_state, req.body.customer_zip, req.body.customer_country];
        db.customers.create_customer(params,
            function(err, result) {
                console.log(err);
                console.log(result);
                res.status(200).json(result);
            });
    },
    updateCustomer: function(req, res) {
      var params = [req.body.customer_first_name, req.body.customer_last_name, req.body.customer_password, req.body.customer_email, req.body.customer_phone, req.body.customer_address, req.body.customer_city, req.body.customer_state, req.body.customer_zip, req.body.customer_country];
        db.customers.update_customer(params,
            function(err, result) {
                console.log(err);
                console.log(result);
                res.status(200).json('Customer has been updated.');
            });
    },
    deleteCustomer: function(req, res) {
        var id = [req.params.id];
        db.customers.delete_customer(id,
            function(err, result) {
                console.log(err);
                console.log(result);
                res.status(200).json('Customer has been deleted.');
            });
    },
    getCustomer: function(req, res) {
        var id = [req.params.id];
        db.customers.read_customer(id,
            function(err, result) {
                console.log(err);
                console.log(result);
                res.status(200).json(result);
            });
    },
    getAllCustomers: function(req, res) {
        db.customers.read_customers(
            function(err, result) {
                console.log(err);
                console.log(result);
                res.status(200).json(result);
            });
    }
};
