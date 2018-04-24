app.controller('labController', [
    '$scope', 'registration',

    function($scope, $registration) {
        $scope.forHide = false;
        $scope.reset = reset;
        $scope.submit = submit;

        reset();

        function submit(model) {
            registration.submit(model).$promise
                .then(function(response) {
                        alert(response.token);
                        $scope.forHide = true;
                        reset();
                    },
                    function(response) {
                        alert('error');
                    });
        }

        function reset() {
            $scope.model = {};
        }
    }
]);