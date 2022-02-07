function shelfBook(book, shelf) {
  //input: takes in 2 parameters(an object book, and the empty array of shelf)
  //function purpose: to be able to add this book object to the empty array shelf with a max of 3 books on the shelf.
  //output: the shelf array with the added books.
  if (shelf.length < 3) {
    shelf.unshift(book);
    //console.log(book);
    return shelf;
  } else {
    return shelf;
    }
}

function unshelfBook(book, shelf) {
  //input: 2 parameters (book object and the shelf array)
  //function purpose: to check and see if the book is on the shelf array then take that book object out of the shelf array
  //output: return the shelf array with the book removed from the array.
  for (var i = 0; i < shelf.length; i++) {
    if (book === shelf[i].title) {
      shelf.splice(i, 1);
      return shelf;
    }
  }
}

function listTitles(shelf) {
  //input: a single parameter (the shelf array)
  //function purpose: to be able to list out the shfl array with 3 books on it.
  //output: a string of the 3 book titles on the shelf.

  //OPTION 2:
  // var bookList = `${shelf[0].title}, ${shelf[1].title}, ${shelf[2].title}`;
  // return bookList;

  var bookTitlesOnShelf = [];
   for (var i = 0; i < shelf.length; i++) {
     bookTitlesOnShelf.push(" " + shelf[i].title);
   }

   bookTitlesOnShelf[0] = bookTitlesOnShelf[0].trim()
   return bookTitlesOnShelf.toString();
}

function searchShelf(shelf, bookTitle) {
  //input:
  //function purpose:
  //output:
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      return true;
    }
  }
  return false;
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
