var app = angular.module('lifted', ['ngRoute', 'ui.router', 'ngAnimate', 'ngCart'])  //ui.router is awesome


  app.config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '../view/home.html',
          controller: 'oneProductCtrl'
        })

        .state('products', {
          url: '/products',
          templateUrl: '../view/products/allProducts.html',
          controller: 'allProductsCtrl'
        })

        .state('product', {
          url: '/products/:id',
          templateUrl: '../view/products/oneProduct.html',
          controller: 'oneProductCtrl'
        })

        .state('cart', {
          url: '/cart/id',
          templateUrl: '../view/cart.html',
          controller: 'cartCtrl'
        })

        .state('order', {
          url: '/order',
          templateUrl: '../view/checkout/order.html',
          controller: 'orders'
        })

        .state('summary', {
          url: '/summary',
          templateUrl: '../view/checkout/summary.html',
          controller: 'orders'
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
           .otherwise('/');


    });
