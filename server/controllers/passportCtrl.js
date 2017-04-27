var app = require('../server');
//var db = app.get('db');

  module.exports = {
  register: function(req, res, next) {
    var db = app.get('db');
    db.create_customer([req.body.customer_first_name, req.body.customer_last_name, req.body.customer_password, req.body.customer_email], function(err, customer) {
       if (err) res.status(404);
       else res.redirect('/#/skis')
    });
  }
};
