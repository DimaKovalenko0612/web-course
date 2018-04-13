app.controller('menuController', [
    '$scope',
    function($scope) {
        $scope.model = {
            title: 'Our menu',
            MainDish: {
                name: '',
                price: ''
            }
        };

        $scope.changeMainDish = function(item, price) {
            console.log('test');
            $scope.model.MainDish.name = item;
            $scope.model.MainDish.price = price;
        }
    }
]);