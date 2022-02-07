class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
    this.greetPatron = function greetPatron(name, morning) {
      if (morning === true) {
        return `Good morning, ${name}!`
      }
      return `Hello, ${name}!`;
    }
    this.findBook = function findBook(bookTitle) {
        var currentShelf = library.shelves.fantasy;
        var currentLibrary = library;
        var currentGenre = library.shelves.fantasy[0].genre;
        //console.log(currentGenre)
        var genre = currentGenre;
        var publicLibrary = currentLibrary;
        var bookName = bookTitle;

        function checkoutBook(publicLibrary, bookName, genre) {
          if (genre === "fantasy" && publicLibrary.shelves.fantasy.length !== 0) {
            for (var i = 0; i < publicLibrary.shelves.fantasy.length -1; i++); {
              if (publicLibrary.shelves.fantasy[i].title === bookName) {
                publicLibrary.shelves.fantasy.splice(0);
                return `Yes, we have ${bookTitle}`;
              } else {
                return `Sorry, we do not have ${bookTitle}`;
              }
            }

          } else if (genre === "fiction" && publicLibrary.shelves.fiction.length !== 0) {
            for (var k = 0; k < (publicLibrary.shelves.fiction.length - 1); k++); {
              if (publicLibrary.shelves.fiction[k].title === bookName) {
                publicLibrary.shelves.fiction.splice(0);
                return `Yes, we have ${bookTitle}`;
              } else {
                return `Sorry, we do not have ${bookTitle}`;
              }
            }

          } else if (genre === "nonFiction" && publicLibrary.shelves.nonFiction.length !== 0) {
            for (var j = 0; j < (publicLibrary.shelves.nonFiction.length - 1); j++); {
              if (publicLibrary.shelves.nonFiction[j].title === bookName){
                publicLibrary.shelves.nonFiction.splice(0);
                return `Yes, we have ${bookTitle}`;
              } else {
                return `Sorry, we do not have ${bookTitle}`;
              }
            }
          } else {
            return `Sorry, there are currently no copies of ${bookName} available at the ${publicLibrary.name}`
          }

        }
      //console.log(publicLibrary)
        for (var i = 0; i < currentShelf.length; i++) {
          if (currentShelf[i].title === bookTitle) {
            checkoutBook(publicLibrary, bookName, genre);
            return `Yes, we have ${bookName}`;
          } else {
            return `Sorry, we do not have ${bookTitle}`;
          }
        }
    }
    this.calculateLateFee = function calculateLateFee(daysLate) {
      var exactLateFee = daysLate * .25;
      //ANOTHER OPTION:
        // var remaining = exactLateFee % 1;
        // if (remaining === .25) {
        //   return Math.round((daysLate + 1) * .25)
        // } else {
        //   return Math.round(daysLate * .25);
        // }
      return Math.ceil(exactLateFee);
    }
  }
}

module.exports = Librarian;
