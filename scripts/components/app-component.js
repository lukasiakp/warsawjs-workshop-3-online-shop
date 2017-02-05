(function () {
    'use strict';

    const TEMPLATE = `
        <section class="container">
            <page-header></page-header>
        
            <product-list class="row">
                <div class="progress">
                    <div class="indeterminate"></div>
                </div>
            </product-list>
        
            <page-footer></page-footer>
        </section>
    `;

    class AppComponent {
        constructor() {
            this.template = TEMPLATE;
        }
    }

    angular.module('shop').component('app', new AppComponent)
}());












/*
(function () {
    'use strict';

    class AppComponent {
        constructor() {
            //$ctrl.* tu sa pola z this.*
            this.templateUrl = '/scripts/components/app-component.html';
            this.controller = AppController;
        }
    }

    class AppController {
        constructor(ProductsService/!*, $scope*!/){
            this.title = 'Witamy na WarsawJS';
            this.liczbaLiter = "Start";
            //this.products = ProductsService.$get();
            ProductsService.$get().then(
                products => {
                    this.products = products;
                   // $scope.$apply(); //gdy zmienilismy dane sami bez eventu to trzeba uzyć $apply()
                    // aby Angular wiedzial ze dane sie zmienily i mogl przerenderowac strone
                })
        }
    }

    angular.module('shop').component('app', new AppComponent);
    //angular.module('shop') - pobiranie modulu shop
    //.component('app', new AppComponent); - dodanie komponentu odpwieda ze w tagu <app> w index.html generowac kod


}());

/!*

class AppController {
    constructor(ProductsService, $scope){
        this.title = 'Witamy na WarsawJS';
        this.liczbaLiter = "Start";
        //this.products = ProductsService.$get();
        ProductsService.$get().then(
            products => {
                this.products = products;
                $scope.$apply(); //gdy zmienilismy dane sami bez eventu to trzeba uzyć $apply()
                // aby Angular wiedzial ze dane sie zmienily i mogl przerenderowac strone
            })
    }
}*!/
*/
