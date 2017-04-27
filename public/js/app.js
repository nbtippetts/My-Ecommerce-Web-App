var app = angular.module('lifted', ['ngRoute', 'ui.router', 'ngAnimate', 'ngCart']) //ui.router is awesome


  app.config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: './view/home.html'
        })

        .state('page', {
          url: '/page',
          templateUrl: './view/page.html'
        })

        .state('login', {
          url: '/login',
          templateUrl: './view/login.html'
        })

        .state('products', {
          url: '/products',
          templateUrl: './view/products/allProducts.html',
          controller: 'allProductsCtrl'
        })

        .state('product', {
          url: '/products/:id',
          templateUrl: './view/products/oneProduct.html',
          controller: 'oneProductCtrl'
        })

        .state('cart', {
          url: '/cart/id',
          templateUrl: './view/cart.html',
          controller: 'cartCtrl'
        })

        .state('orders', {
          url: '/orders',
          templateUrl: './view/checkout/order.html',
          controller: 'orderCtrl'
        })

        .state('order', {
          url: '/orders/:id',
          templateUrl: './view/checkout/summary.html',
          controller: 'summaryCtrl'
        })

        .state('payment', {
          url: '/payment',
          templateUrl: './view/checkout/payment.html',
          //controller: 'paymentCtrl'
        })

        // .state('team', {
        //   url: '/team',
        //   templateUrl: '../view/team.html',
        //   //controller: 'teamCtrl'
        // })
        //
        // .state('teamDetails', {
        //   url: '/teamDetails/:id',
        //   templateUrl: '../view/teamDetails.html',
        //   //controller: 'teamDetailsCtrl'
        // })

        // .state('video', {
        //   url: '/video',
        //   templateUrl: '../view/video.html'
        // })

         $urlRouterProvider
           .otherwise('/home');


    });
