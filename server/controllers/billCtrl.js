var app = require('../server');
var db = app.get('db');

module.exports = {
    createBill: function(req, res, next) {
        db.bills.create_bill([req.body.bill_first_name, req.body.bill_last_name, req.body.bill_email, req.body.bill_phone, req.body.bill_address, req.body.bill_city, req.body.bill_state, req.body.bill_zip, req.body.bill_country], function(err, bill) {
                console.log(err);
                console.log(bill);
                res.send(bill);
            });
    },
    updateBill: function(req, res) {
      var params = [req.body.bill_first_name, req.body.bill_last_name, req.body.bill_email, req.body.bill_phone, req.body.bill_address, req.body.bill_city, req.body.bill_state, req.body.bill_zip, req.body.bill_country, req.body.bill_id];
        db.bills.update_bill(params,
            function(err, result) {
                console.log(err);
                console.log(result);
                res.status(200).json('billing has been updated.');
            });
    },
    deleteBill: function(req, res) {
        var id = [req.params.id];
        db.bills.delete_bill(id,
            function(err, result) {
                console.log(err);
                console.log(result);
                res.status(200).json('billing has been deleted.');
            });
    },
    getBill: function(req, res) {
        var id = [req.params.id];
        db.bills.read_bill(id,
            function(err, result) {
                console.log(err);
                console.log(result);
                res.status(200).json(result);
            });
    },
    getAllBills: function(req, res) {
        db.bills.read_bills(
            function(err, result) {
                console.log(err);
                console.log(result);
                res.status(200).json(result);
            });
    }
};
