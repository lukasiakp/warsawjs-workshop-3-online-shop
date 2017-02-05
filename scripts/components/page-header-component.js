(function () {
    'use strict';

    const TEMPLATE = `
        <header>
            <nav class="blue lighten-3">
                <div class="nav-wrapper">
                    <a class="brand-logo">
                        <img src="images/logo-black-50x50.png"/>
                        Sklep internetowy
                    </a>
                    <ul class="right">
                        <li>
                        Koszyk ({{$ctrl.addedProduct}})
                        </li>
                    </ul>

                    <cart-dropdown></cart-dropdown>
                </div>
            </nav>

            <product-search></product-search>
        </header>
    `;

    class PageHeader {
        constructor(CartService) {
            this.template = TEMPLATE;
            this.constructor = function (CartService) {
                this.addedProduct = CartService.getCartSize();
            }
        }
    }

    angular.module('shop')
        .component('pageHeader', new PageHeader);
}());

