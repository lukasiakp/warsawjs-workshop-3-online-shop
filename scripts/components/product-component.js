(function () {
    'use strict';

    const TEMPLATE = `
        <div class="card small blue-grey darken-1">
            <div class="card-content white-text">
                <h6 class="card-title">{{ $ctrl.product.name }}</h6>
                <img
                        class="circle left"
                        ng-src="{{ $ctrl.product.image }}" alt=""/>
                <p>{{$ctrl.product.description}}</p>
            </div>
            <div class="card-action">
                <product-add-to-cart></product-add-to-cart>
                <button class="btn" ng-click="$ctrl.onDelete({$product:$ctrl.product}); $event.stopPropagation();">delete</button>
                <button class="btn" ng-click="$ctrl.onAddToCart($ctrl.product, $ctrl.amountOfProduct); $event.stopPropagation();">buy</button>
                <input type="number" ng-model="$ctrl.amountOfProduct" name="amountOfProduct" style="width: 35px;">
            </div>
        </div>
    `;

    class Product {
        constructor() {
            this.bindings = {
                product: '<',
                onDelete: '&'
            };
            this.require = {
                productList: '^^'
            };
            this.template = TEMPLATE;
            this.controller = ProductController;
        }
    }

    class ProductController {
        constructor(CartService) {
            this.product = null;
            this.cartService = CartService;
            this.amountOfProduct = 1;
        }

        onAddToCart(product, amountOfProduct){
            console.log('product', product);
            this.cartService.appendCart(product , amountOfProduct);
            this.amountOfProduct = 1;

        }

        $onInit() {
            //this.product = this.productList.getProductByIndex(this.productIndex);
        }
    }

    angular.module('shop')
        .component('product', new Product);
}());

