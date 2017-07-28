angular.module('Bookshelf').controller('authCtrl', function ($scope, $state, libraryService) {


    // var loggedIn = false;
    $scope.logOn = function () {
        $scope.loggedIn = true;
        $state.go("library");
    }
    $scope.registerNow = function () {
        $state.go("register");
    }

    var delayMillis = 0;
    setTimeout(function () {
        //your code to be executed after 1 second
        if (!$scope.loggedIn) {
            $state.go("login");
        }
    }, delayMillis);
});