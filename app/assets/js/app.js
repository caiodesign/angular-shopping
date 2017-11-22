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
        }),
        $locationProvider.html5Mode({
            enabled: !0,
            requireBase: !0
        });

};

function run($rootScope){
    $rootScope.cartQuantity = 0;
    $rootScope.totalPrice = 0;
}