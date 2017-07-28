angular.module('Bookshelf').controller('libraryCtrl', function ($scope, libraryService, postBookService, $stateParams) {
  $scope.myBooks = libraryService.myBooks;

  $scope.googleBooks = []

  $scope.getBook = function (searchTerm) {
    console.log(searchTerm);
    libraryService.getBook(searchTerm).then(function (dataFromService) {
      $scope.googleBooks = dataFromService;
    });
  }
  $scope.postBook = function (book) {
    postBookService.postBook(book).then(data => console.log(data));
  }
});