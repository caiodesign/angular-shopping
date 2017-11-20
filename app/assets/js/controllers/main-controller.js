angular.module('app', [])
    .factory('cartStorage', function() {
        var _cart = {
            items: []
        };
        var service = {
            get cart() {
                return _cart;
            }
        }
        return service;
    })
    .controller('mainController', function(cartStorage) {
        var _this = this;
        _this.cartStorage = cartStorage.cart;

        _this.items = [{
            name: 'iPhone 6S',
            description: "32GB - 4G Anatel",
            image: "http://phonesstorekenya.com/wp-content/uploads/2016/05/iphone-6s-good9-128x128.jpg",
            price: 1600,
            quantity: 0,
            showAddToCart: false,
            addedToCart: false
        }, {
            name: 'Samsung Galaxy 10',
            description: "32GB - 4G Anatel",
            image: "http://phonesstorekenya.com/wp-content/uploads/2016/05/iphone-6s-good9-128x128.jpg",
            price: 2000,
            quantity: 0,
            showAddToCart: false,
            addedToCart: false
        }, {
            name: 'Motorola V4',
            description: "32GB - 4G Anatel",
            image: "http://phonesstorekenya.com/wp-content/uploads/2016/05/iphone-6s-good9-128x128.jpg",
            price: 400,
            quantity: 0,
            showAddToCart: false,
            addedToCart: false
        }, {
            name: 'Sony Xperia',
            description: "32GB - 4G Anatel",
            image: "http://phonesstorekenya.com/wp-content/uploads/2016/05/iphone-6s-good9-128x128.jpg",
            price: 1200,
            quantity: 0,
            showAddToCart: false,
            addedToCart: false
        }];

        _this.addToCart = function(item) {
            _this.cartStorage.items.push(item);
            item.addedToCart = true;
        }

        _this.increaseItemAmount = function(item) {
            item.quantity++;
            item.showAddToCart = true;
        }

        _this.decreaseItemAmount = function(item) {
            item.quantity--;
            if (item.quantity <= 0) {
                item.quantity = 0;
                item.addedToCart = false;
                item.showAddToCart = false;
                var itemIndex = _this.cartStorage.items.indexOf(item);
                if (itemIndex > -1) {
                    _this.cartStorage.items.splice(itemIndex, 1);
                }
            } else {
                item.showAddToCart = true;
            }
        }
    })
    .controller('cartController', function(cartStorage) {
        var _this = this;
        _this.cartStorage = cartStorage.cart;

        _this.increaseItemAmount = function(item) {
            item.quantity++;
        }

        _this.decreaseItemAmount = function(item) {
            item.quantity--;
            if (item.quantity <= 0) {
                item.quantity = 0;
                item.addedToCart = false;
                item.showAddToCart = false;
                var itemIndex = _this.cartStorage.items.indexOf(item);
                if (itemIndex > -1) {
                    _this.cartStorage.items.splice(itemIndex, 1);
                }
            }
        }

        _this.removeFromCart = function(item) {
            item.quantity = 0;
            item.addedToCart = false;
            item.showAddToCart = false;
            var itemIndex = _this.cartStorage.items.indexOf(item);
            if (itemIndex > -1) {
                _this.cartStorage.items.splice(itemIndex, 1);
            }
        }
    });
