angular.module('app').factory('cartStorage', function() {
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
    .controller('ProductController', function(cartStorage) {
        var _this = this;
        _this.cartStorage = cartStorage.cart;

        console.log(cartStorage.cart);

        _this.items = [{
            name: 'iPhone 6S',
            description: "32GB - 4G Anatel",
            image: "http://phonesstorekenya.com/wp-content/uploads/2016/05/iphone-6s-good9-128x128.jpg",
            price: 1600,
            showAddToCart: false,
            addedToCart: false
        }, {
            name: 'Samsung Galaxy 10',
            description: "32GB - 4G Anatel",
            image: "http://havan.vteximg.com.br/arquivos/ids/2560413-128-128/celular-smartphone-dual-chip-samsung-galaxy-j105-3-168.jpg?v=635972670480730000",
            price: 2000,
            showAddToCart: false,
            addedToCart: false
        }, {
            name: 'Motorola V4',
            description: "32GB - 4G Anatel",
            image: "http://tripplek.co.ke/wp-content/uploads/2017/01/Motorola-Moto-g4-plus-0.jpg-good-128x128.jpg",
            price: 400,
            showAddToCart: false,
            addedToCart: false
        }, {
            name: 'Sony Xperia',
            description: "32GB - 4G Anatel",
            image: "https://renovecel.com.br/wp-content/uploads/2016/10/107096-1-smartphone_sony_xperia_z1_c6943_preto_box-5-128x128.jpg",
            price: 1200,
            showAddToCart: false,
            addedToCart: false
        }];

        _this.addToCart = function(item) {
            _this.cartStorage.items.push(item);
            item.addedToCart = true;
        }

        itemsNumber(_this.cartStorage.items.length);
        
    });
