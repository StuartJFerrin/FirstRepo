angular.module('Bookshelf').service('postBookService', function($http, $q) {
this.postBook = function(book) {
    return $http.post("http://localhost:3000/api/book/", book);
}

    
})