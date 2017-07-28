angular.module('Bookshelf').controller('bookCtrl', function ($scope, libraryService, $stateParams) {
    console.log($stateParams);
    $scope.book = libraryService.getOneBook($stateParams.isbn);
     $scope.googleBook = libraryService.getBook($stateParams.isbn); 
    console.log($scope.googleBook);
}); 