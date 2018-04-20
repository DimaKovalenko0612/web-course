app.controller('labController', [
    '$scope',
    function($scope) {
        $scope.reset = reset;
        $scope.submit = submit;

        function submit(model) {
            alert('Submitted\n' + JSON.stringify(model));
        }

        function reset() {
            $scope.model = {};
        }
        reset();
    }
]);