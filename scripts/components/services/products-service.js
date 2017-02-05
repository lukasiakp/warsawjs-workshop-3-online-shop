function ProductsServiceFaktory($http) {
    return{
        $get() {
            return $http.get('data/products.json').then(data => data.data.products);
        }
    };
}

/* Na promisach
function ProductsServiceFaktory() {
    return{
        $get() {
            return new Promise((resolve, reject) => {
                let data = [
                    {id: 1, name: "rower"},
                    {id: 2, name: "auto"}
                ];
                resolve(data);
            });
        }
    }
}
*/

/*function ProductsServiceFaktory() {
    return{
        $get() {
            return [
                {id:1 , name: "rower"},
                {id:2 , name: "auto"}
            ]
        }
    }

}*/


angular.module('shop').factory('ProductsService', ProductsServiceFaktory);