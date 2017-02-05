(function () {
    'use strict';

    const TEMPLATE = `
        <div class="col l4" ng-repeat="product in $ctrl.products track by $index">
            <product class="row" data-product="product"
                ng-click="$ctrl.chooseProduct(product)" 
                on-delete="$ctrl.onProductDelete($product, $index)"                 
            ></product>
        </div>
    `;

    class ProductList {
        constructor() {
            this.template = TEMPLATE;
            this.controller = ProductListController;
        }
    }


    class ProductListController {
        constructor(ProductsService) {
            this.products = [];
            this.ProductsService = ProductsService;
            this.chooseProduct  = function(product) {
                console.log(product.name);
            };
        }

        $onInit() {
            this.ProductsService.$get()
                .then((data) => {
                    console.log('data', data);
                    this.products = this.products.concat(data);
                });
        }

        getProductByIndex(index) {
            return this.products[index];
        }

        onProductDelete (product, index) {
            console.log('onProductDelete ' + index);
            this.products.splice(index, 1);
        };
    }

    angular.module('shop')
        .component('productList', new ProductList);
}());

