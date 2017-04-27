var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    cors = require('cors'),
    config = require('./config.js'),
    http = require('http'),
    https = require('https'),
    fs = require('fs'),
    passport = require('passport'),
    passportHttp = require('passport-http'),
    LocalStrategy = require('passport-local').Strategy,
    massive = require('massive'),
    connectionString = "postgres://postgres:otb4life@localhost/betty";

    var port = 4500;
    // var options = {
    //   key: fs.readFileSync('mykey.pem'),
    //   cert: fs.readFileSync('mycert.pem'),
    //   requestCert: false,
    //   rejectUnauthorized: false
    // };

    var app = module.exports = express();
    //var server = https.createServer(options, app)

    var corsOptions = {
       origin: 'http://localhost:4500',
       optionsSuccessStatus: 200
    };
    //Middleware for modules
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors('corsOptions'));
    app.use(cookieParser());
    app.use(session({
      secret: config.sessionSecret,
      resave: false,
      saveUninitialized: true
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    var massiveServer = massive.connectSync({connectionString: connectionString});
    app.set('db', massiveServer);

    app.use(express.static(__dirname + './../public'));

    var db = app.get('db');

    passport.use(new LocalStrategy.Strategy(verifyCredentials));
    passport.use(new passportHttp.BasicStrategy(verifyCredentials));

    function verifyCredentials(email, password, done) {
      db.customers.findone({email: email}, function(err, customer) {
        if (err) { return done(err); }
        if (!customer) { return done(null, false); }
        if (customer.password != password) { return done(null, false); }
        return done(null, customer);
      })
    };

    passport.serializeUser(function(customer, done) {
      done({ customer: id });
    });

    passport.deserializeUser(function(id, done) {
      db.get_customerId([id], function(err, customer) {
        customer = customer[0];
        if (err) {
          done(err, null);
        } else {
          console.log('RETRIEVED USER');
          done(null, { customer: id, name: id });
        }
        console.log('customername', customer);
      })
    });

    function ensureAuthenticated(req, res, next) {
      if (req.isAuthenticated()) {
        next();
      } else {
        next(new Error(401))
      }
    }

     var productCtrl = require('./controllers/productCtrl'),
         adminCtrl = require('./controllers/adminCtrl'),
         customerCtrl = require('./controllers/customerCtrl'),
         orderCtrl = require('./controllers/orderCtrl');
         billCtrl = require('./controllers/billCtrl');
         passportCtrl = require('./controllers/passportCtrl'),
        // userCtrl = require('./controllers/userCtrl')

    //  app.get('/#/home', function(req, res) {
    //    res.redirect('/#/home', {
    //      isAuthenticated: req.isAuthenticated(),
    //      customer: req.customer
    //    });
    //  });
     //
    //   app.get('/login', function(req, res) {
    //     res.redirect('/#/login')
    //   });
     //
    //  app.post('/login', passport.authenticate('local'), function(req, res) {
    //    res.redirect('/#/skis');
    //  });
    //  app.post('local/register', passportCtrl.register);
     //
    //  app.get('/logout', function(req, res) {
    //    console.log('logout')
    //    req.logout();
    //    res.redirect('/#/home');
    //  })

    // app.use('/api', passport.authenticate('basic', { session: false }));
    //  app.post('/api/customers', customerCtrl.createCustomer);
    //  app.get('/api/customers/customer:id?id=', customerCtrl.getCustomer);

    //GET\\
    app.get('/api/teams', productCtrl.getTeams);
    app.get('/api/teams/team:id', productCtrl.getTeam);

    app.get('/api/admin', adminCtrl.getAllAdmins);
    app.get('/api/admin/:id', adminCtrl.getAdmin);

    app.get('/api/products', productCtrl.getAllProducts);
    app.get('/api/products/:id', productCtrl.getProduct);

    // app.get('/api/customers', customerCtrl.getAllCustomers);
    // app.get('/api/customers/customer:id?id', customerCtrl.getCustomer);

    app.get('/api/orders', orderCtrl.getAllOrders);
    app.get('/api/orders/:id', orderCtrl.getOrder);

    app.get('/api/bills', billCtrl.getAllBills);
    app.get('/api/bills/:id', billCtrl.getBill);

    //POST\\
    app.post('/api/adimn', adminCtrl.createAdmin);
    app.post('/api/products', productCtrl.createProduct);
    //app.post('/api/customers', customerCtrl.createCustomer);
    app.post('/api/orders', orderCtrl.createOrder);
    app.post('/api/bills', billCtrl.createBill);

    //PUT\\
    app.put('api/admin', adminCtrl.updateAdmin);
    app.put('/api/products', productCtrl.updateProduct);
    app.put('/api/customers', customerCtrl.updateCustomer);

    //DELETE\\
    app.delete('/api/admin', adminCtrl.deleteAdmin);
    app.delete('/api/products/:id', productCtrl.deleteProduct);
    app.delete('/api/customers', customerCtrl.deleteCustomer);

    // app.post('/api/users', userCtrl.newUser);
    //
    // app.get('/api/users/user:id?id=', userCtrl.getUserId);
    //
    // app.post('/auth/local/register', passportCtrl.register);
    // app.post('/auth/local', passport.authenticate('local'), function(req, res) {
    // //This is only called if login was Successfully
    // res.redirect('/#/skis');
    // });
    //
    // app.get('/auth/logout', function(req, res) {
    //   console.log('logout')
    //   req.logout();
    //   res.redirect('/');
    // })
//user logout


    app.listen(port, function() {
      console.log('Matrix is online' + ' ' + port)
    });
