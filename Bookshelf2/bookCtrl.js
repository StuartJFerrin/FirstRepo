angular.module('Bookshelf').controller('bookCtrl', function ($scope, getBooksService) {
  //This is setting up the default behavior of our ng-grid. The important thing to note is the 'data' property. 
  //The value is 'songData'. That means ng-grid is looking for songData on $scope and is putting whatever songData 
  //is into the grid.
  //This means when you make your iTunes request, you'll need to get back the information, parse it accordingly, 
  //then set it to songData on the scope -> $scope.songData = ...
  $scope.gridOptions = {
    data: 'bookData',
    height: '110px',
    sortInfo: { fields: ['Title', 'Author', 'averageRating'], directions: ['asc'] },
    columnDefs: [
      { field: 'title', displayName: 'Title' },
      { field: 'subtitle', displayName: 'Subtitle' },
      { field: 'authors', displayName: 'Author' },
      { field: 'description', displayName: 'Synopsis' },
      { field: 'averageRating', displayName: 'Average Rating'},
      { field: 'smallThumbnail', displayName: 'Small Thumbnail' },
      { field: 'thumbnail', displayName: 'Thumbnail' },
    ]
  };

  //Our controller is what's going to connect our 'heavy lifting' itunesService with our view (index.html) so our user 
  //can see the results they get back from itunes.

  //First inject itunesService into your controller.


  //Now write a function that will call the method on the itunesService that is responsible for getting the data from 
  //iTunes, whenever the user clicks the submit button
  //*remember, that method should be expecting an artist name. The artist name is coming from the input box on 
  //index.html, head over there and check if that input box is tied to any specific model we could use.
  //Also note that that method should be retuning a promise, so you could use .then in this function. 

  //Code here
  $scope.getBook = function (searchTerm) {
console.log(searchTerm);
    getBooksService.getBook(searchTerm).then(function (dataFromService) {
      $scope.bookData = dataFromService;
    });
  }


  //Check that the above method is working by entering a name into the input field on your web app, and then console.log 
  //the result.




  //If everything worked you should see a huge array of objects inside your console. That's great! But unfortunately 
  //that's not what ng-grid is expecting. What you need to do now is sort the data you got back. This sounds like a 
  //great job for a service! Head back to your itunesService and complete the last instructions there. 






  //Now that your service is doing the heavy lifting (sorting/formatting), we can now put the result of calling that
  // method onto $scope.songData so that ng-grid will find it and populate the page.



});




