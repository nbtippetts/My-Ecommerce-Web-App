var app = require('../server');
var db = app.get('db');

module.exports = {
    createAdmin: function(req, res) {
        var params = [req.body.admin_name, req.body.admin_password];
        db.admin.create_admin(params,
            function(err, result) {
                console.log(err);
                console.log(result);
                res.status(200).json(result);
            });
    },
    updateAdmin: function(req, res) {
        var params = [req.body.admin_name, req.body.admin_password];
        db.admin.update_admin(params,
            function(err, result) {
                console.log(err);
                console.log(result);
                res.status(200).json('Admin has been updated.');
            });
    },
    deleteAdmin: function(req, res) {
        var id = [req.params.id];
        db.admin.delete_admin(id,
            function(err, result) {
                console.log(err);
                console.log(result);
                res.status(200).json('Admin has been deleted.');
            });
    },
    getAdmin: function(req, res) {
        var id = [req.params.id];
        db.admin.read_admin(id,
            function(err, result) {
                console.log(err);
                console.log(result);
                res.status(200).json(result);
            });
    },
    getAllAdmins: function(req, res) {
        db.admin.read_admins(
            function(err, result) {
                console.log(err);
                console.log(result);
                res.status(200).json(result);
            });
    }
};
