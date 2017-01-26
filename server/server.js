var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    cors = require('cors'),
    config = require('./config.js'),
    pg = require('pg'),
    //passport = require('passport'),
    massive = require('massive'),
    connectionString = "postgres://postgres:otb4life@localhost/betty";


    var app = module.exports = express();
    //exporting express to files

    app.set('port', (process.env.PORT || 4500));

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
    //app.use(passport.initialize());
    //app.use(passport.session());
    app.use(express.static(__dirname + './../public'));


    var massiveServer = massive.connectSync({connectionString: connectionString});

     app.set('db', massiveServer);
     //connecting server to db folder and postgres database

      var db = app.get('/db', function (request, response) {
       pg.connect(process.env.DATABASE_URL, function(err, client, done) {
         client.query('SELECT * FROM test_table', function(err, result) {
           done();
           if (err)
            { console.error(err); response.send("Error " + err); }
           else
            { response.render('pages/db', {results: result.rows} ); }
         });
       });
     });

     app.get('/times', function(request, response) {
         var result = ''
         var times = process.env.TIMES || 5
         for (i=0; i < times; i++)
           result += i + ' ';
       response.send(result);
     });


     var productCtrl = require('./controllers/productCtrl'),
         adminCtrl = require('./controllers/adminCtrl'),
         customerCtrl = require('./controllers/customerCtrl'),
         orderCtrl = require('./controllers/orderCtrl');
         billCtrl = require('./controllers/billCtrl');



       //app.get('/api/skis/ski:id', productCtrl.getSki);

       // app.get('/api/skis', productCtrl.getAll);
       //
       // app.get('/api/poles/pole:id', productCtrl.getSkiPoles);
       //
       // app.get('/api/poles', productCtrl.getAllPoles);
       //
       app.get('/api/teams', productCtrl.getTeams);

       app.get('/api/teams/team:id', productCtrl.getTeam);


      //GET\\
      app.get('/api/admin', adminCtrl.getAllAdmins);
      app.get('/api/admin/:id', adminCtrl.getAdmin);

      app.get('/api/products', productCtrl.getAllProducts);
      app.get('/api/products/:id', productCtrl.getProduct);

      app.get('/api/customers', customerCtrl.getAllCustomers);
      app.get('/api/customers/:id', customerCtrl.getCustomer);

      app.get('/api/orders', orderCtrl.getAllOrders);
      app.get('/api/orders/:id', orderCtrl.getOrder);

      app.get('/api/bills', billCtrl.getAllBills);
      app.get('/api/bills/:id', billCtrl.getBill);

      //POST\\
      app.post('/api/adimn', adminCtrl.createAdmin);
      app.post('/api/products', productCtrl.createProduct);
      app.post('/api/customers', customerCtrl.createCustomer);
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


      app.listen(app.get('port'), function() {
        console.log('Node app is running on port', app.get('port'));
      });
