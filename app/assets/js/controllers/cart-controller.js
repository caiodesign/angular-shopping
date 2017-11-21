angular.module('app').controller('CartController', function(cartStorage) {
    var _this = this;
    _this.cartStorage = cartStorage.cart;

    _this.removeFromCart = function(item) {
        item.addedToCart = false;
        item.showAddToCart = false;
        var itemIndex = _this.cartStorage.items.indexOf(item);
        
        if (itemIndex > -1) {
            _this.cartStorage.items.splice(itemIndex, 1);
        }
    }
});