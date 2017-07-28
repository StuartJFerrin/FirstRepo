angular.module('Bookshelf').service('libraryService', function ($http, $q) {

    this.myBooks = [
        { isbn: 1, title: 'Mistborn', author: 'Brandon Sanderson', cover: 'http://books.google.com/books/content?id=t_ZYYXZq4RgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', thumb: 'http://books.google.com/books/content?id=t_ZYYXZq4RgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api' },
        { isbn: 2, title: 'The Way of Kings', author: 'Brandon Sanderson', cover: 'http://books.google.com/books/content?id=QVn-CgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', thumb: 'http://books.google.com/books/content?id=QVn-CgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api' },
        { isbn: 3, title: 'Farenheit 451', author: 'Ray Bradbury', cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTEwfAp2egIi5O7iBQlh5uR_9XAbDv2MyZavylBzI83qVsd-V', thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTEwfAp2egIi5O7iBQlh5uR_9XAbDv2MyZavylBzI83qVsd-V' },
        { isbn: 4, title: 'Harry Potter and the Sorcerers Stone', author: 'JK Rowling', cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg04e0rG212eve---shrBHWftTIbhHRwY94Np1whBQZiRwHEkj', thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg04e0rG212eve---shrBHWftTIbhHRwY94Np1whBQZiRwHEkj' },
        { isbn: 5, title: 'Theft of Swords', author: 'Michael J Sullivan', cover: 'https://images-na.ssl-images-amazon.com/images/I/5163nh43GtL._SX335_BO1,204,203,200_.jpg', thumb: 'https://images-na.ssl-images-amazon.com/images/I/5163nh43GtL._SX335_BO1,204,203,200_.jpg', thumb: 'http://t3.gstatic.com/images?q=tbn:ANd9GcQTNTUjBGW8Oy5Q09Xy9aUD79xbcnhx-WoKouQPOLFEmEFh2wR8' },
        { isbn: 6, title: 'Green Eggs & Ham', author: 'Dr Seuss', cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Green_Eggs_and_Ham.jpg/220px-Green_Eggs_and_Ham.jpg', thumb: '' },
        { isbn: 7, title: 'Winnie-the-Pooh', author: 'AA Milne', cover: 'https://images-na.ssl-images-amazon.com/images/I/51QurFBGbXL.jpg', thumb: 'https://images-na.ssl-images-amazon.com/images/I/51QurFBGbXL.jpg' },
        { isbn: 8, title: 'Anne of Green Gables', author: 'LM Montgomery', cover: 'https://images.booksense.com/images/279/153/9780553153279.jpg', thumb: 'https://images.booksense.com/images/279/153/9780553153279.jpg', },
        { isbn: 9, title: 'Persuasion', author: 'Jane Austen', cover: 'http://images.gr-assets.com/books/1385172413l/2156.jpg', thumb: 'http://images.gr-assets.com/books/1385172413l/2156.jpg', },
        { isbn: 10, title: 'Mistborn', author: 'Brandon Sanderson', cover: 'http://books.google.com/books/content?id=t_ZYYXZq4RgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', thumb: 'http://books.google.com/books/content?id=t_ZYYXZq4RgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api' },
        { isbn: 11, title: 'The Way of Kings', author: 'Brandon Sanderson', cover: 'http://books.google.com/books/content?id=QVn-CgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', thumb: 'http://books.google.com/books/content?id=QVn-CgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api' },
        { isbn: 12, title: 'Farenheit 451', author: 'Ray Bradbury', cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTEwfAp2egIi5O7iBQlh5uR_9XAbDv2MyZavylBzI83qVsd-V', thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTEwfAp2egIi5O7iBQlh5uR_9XAbDv2MyZavylBzI83qVsd-V' },
        { isbn: 13, title: 'Harry Potter and the Sorcerers Stone', author: 'JK Rowling', cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg04e0rG212eve---shrBHWftTIbhHRwY94Np1whBQZiRwHEkj', thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg04e0rG212eve---shrBHWftTIbhHRwY94Np1whBQZiRwHEkj' },
        { isbn: 14, title: 'Theft of Swords', author: 'Michael J Sullivan', cover: 'https://images-na.ssl-images-amazon.com/images/I/5163nh43GtL._SX335_BO1,204,203,200_.jpg', thumb: 'https://images-na.ssl-images-amazon.com/images/I/5163nh43GtL._SX335_BO1,204,203,200_.jpg', thumb: 'http://t3.gstatic.com/images?q=tbn:ANd9GcQTNTUjBGW8Oy5Q09Xy9aUD79xbcnhx-WoKouQPOLFEmEFh2wR8' },
        { isbn: 15, title: 'Green Eggs & Ham', author: 'Dr Seuss', cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Green_Eggs_and_Ham.jpg/220px-Green_Eggs_and_Ham.jpg', thumb: '' },
        { isbn: 16, title: 'Winnie-the-Pooh', author: 'AA Milne', cover: 'https://images-na.ssl-images-amazon.com/images/I/51QurFBGbXL.jpg', thumb: 'https://images-na.ssl-images-amazon.com/images/I/51QurFBGbXL.jpg' },
        { isbn: 17, title: 'Anne of Green Gables', author: 'LM Montgomery', cover: 'https://images.booksense.com/images/279/153/9780553153279.jpg', thumb: 'https://images.booksense.com/images/279/153/9780553153279.jpg', },
        { isbn: 18, title: 'Persuasion', author: 'Jane Austen', cover: 'http://images.gr-assets.com/books/1385172413l/2156.jpg', thumb: 'http://images.gr-assets.com/books/1385172413l/2156.jpg', },
    ]
    this.getOneBook = function (isbn) {
        for (var i = 0; i < this.myBooks.length; i++) {
            if (this.myBooks[i].isbn === parseInt(isbn)) {
                return this.myBooks[i];
                console.log(this.myBooks[i]);
            }
        }
    }
    this.getBook = function (searchTerm) {
        var deferred = $q.defer();
        $http({
            method: 'JSONP',
            url: 'https://www.googleapis.com/books/v1/volumes?q=' + searchTerm + '&maxResults=25&callback=JSON_CALLBACK'
        })
            .then(function (response) {
                var results = response
                    .data
                    .items
                    .map(receivedBook => receivedBook.volumeInfo)
                    .map(bookFactory);

                function bookFactory(bookMeta) {
                    const {
                        title,
                        subtitle,
                        authors,
                        description,
                        averageRating,
                        ratingsCount,
                        imageLinks: {
                            smallThumbnail,
                            thumbnail
                        },

                    } = bookMeta;

                    const [isbn] = bookMeta.industryIdentifiers
                        .filter(function (identifier) {
                            return identifier.type === "ISBN_13";
                        })
                        .map(({identifier}) => identifier)

                    return {
                        title,
                        subtitle,
                        authors: authors.join(' & '),
                        description,
                        averageRating,
                        ratingsCount,
                        smallThumbnail,
                        thumbnail,
                        isbn
                    }
                }


                console.log(results);
                deferred.resolve(results);
            });

        return deferred.promise;
    };

});