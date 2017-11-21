angular.module('app', ['ui.router']).config(config);

function config( $stateProvider, $urlRouterProvider, $locationProvider ){
    
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'ProductController as shop'
        })

        .state('cart', {
            url: '/cart',
            templateUrl: 'views/cart.html',
            controller: 'CartController as cart'
        })

};

function itemsNumber(items){
    return document.querySelector("#current-items").innerHTML = items;
};