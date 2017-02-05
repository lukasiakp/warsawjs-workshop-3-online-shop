

angular.module('shop').filter('dodajWiecej',() =>
    (value) => value + "...czytaj wiecej"
);

angular.module('shop').filter('czyPrzekroczonoLimit',() =>
    (value, len) => (value.length > len ? "TAK" : "NIE")
);