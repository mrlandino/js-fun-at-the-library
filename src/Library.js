// function shelfBook(book, shelf) {
//   if (shelf.length < 3) {
//     shelf.unshift(book);
//     //console.log(book);
//     return shelf;
//   } else {
//     return shelf;
//   }
// }
//
// function unshelfBook(book, shelf) {
//   for (var i = 0; i < shelf.length; i++) {
//     if (book === shelf[i].title) {
//       shelf.splice(i, 1);
//       // return sciFiShelf;
//     }
//   }
// }
//
// function listTitles(shelf) {
//    //for (var i = 0; i < fantasyShelf.length - 1; i++) {
//    //console.log(fantasyShelf[i].title);
//       var bookList = `${shelf[0].title}, ${shelf[1].title}, ${shelf[2].title}`;
//       return bookList;
// }
//
// function searchShelf(shelf, bookTitle) {
//   for (var i = 0; i < shelf.length; i++) {
//     if (shelf[i].title === bookTitle) {
//       return true;
//     }
//   }
//   return false;
// }
//











function createLibrary(libraryName) {
  var library =
    {
      name : libraryName,
      shelves : {
       fantasy : [],
       fiction : [],
       nonFiction : [],
     }
   }
//
  return library;
}

function addBook(publicLibrary, book) {
   // input to addBook: 2 parameters.
   // denverLibrary - createLibrary Function - to object libraryDetails
  //console.log(publicLibrary.shelves)
   if (book.genre === "fantasy"){
     publicLibrary.shelves.fantasy.push(book);
   } else if (book.genre === "nonFiction"){
     publicLibrary.shelves.nonFiction.push(book);
   } else if (book.genre === "fiction"){
     publicLibrary.shelves.fiction.push(book);
   }
}

function checkoutBook (publicLibrary, bookName, genre) {

  if (genre === "fantasy" && publicLibrary.shelves.fantasy.length !== 0) {
    for (var i = 0; i < publicLibrary.shelves.fantasy.length - 1; i++); {
      if (publicLibrary.shelves.fantasy[i].title === bookName) {
          publicLibrary.shelves.fantasy.splice(0);
          return `You have now checked out ${bookName} from the ${publicLibrary.name}`;
      } else {
           return `Sorry, there are currently no copies of ${bookName} available at the ${publicLibrary.name}`;
        }
    }

  } else if (genre === "fiction" && publicLibrary.shelves.fiction.length !== 0) {
      for (var k = 0; k < (publicLibrary.shelves.fiction.length - 1); k++); {
        if (publicLibrary.shelves.fiction[k].title === bookName) {
          publicLibrary.shelves.fiction.splice(0);
          return `You have now checked out ${bookName} from the ${publicLibrary.name}`;
        } else {
          return `Sorry, there are currently no copies of ${bookName} available at the ${publicLibrary.name}`;
        }
      }

  } else if (genre === "nonFiction" && publicLibrary.shelves.nonFiction.length !== 0) {
      for (var j = 0; j < (publicLibrary.shelves.nonFiction.length - 1); j++); {
        if (publicLibrary.shelves.nonFiction[j].title === bookName){
          publicLibrary.shelves.nonFiction.splice(0);
          return `You have now checked out ${bookName} from the ${publicLibrary.name}`;
        } else {
          return `Sorry, there are currently no copies of ${bookName} available at the ${publicLibrary.name}`
        }
      }
    } else {
      return `Sorry, there are currently no copies of ${bookName} available at the ${publicLibrary.name}`
    }
}









module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
