angular.module('app', ['ui.router']).config(config).run(run);

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

function run($rootScope){
    $rootScope.cartQuantity = 0;
}

function itemsNumber(items){
    return document.querySelector("#current-items").innerHTML = items;
};