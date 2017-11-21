angular.module('app').controller('CartController', function (cartStorage, $rootScope) {
    var _this = this;
    _this.cartStorage = cartStorage.cart;

    _this.removeFromCart = function(item) {
        item.addedToCart = false;
        $rootScope.cartQuantity = $rootScope.cartQuantity - 1;
        $rootScope.totalPrice = $rootScope.totalPrice - item.price;
        var itemIndex = _this.cartStorage.items.indexOf(item);
        
        if (itemIndex > -1) {
            _this.cartStorage.items.splice(itemIndex, 1);
        }

    }
});