function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
    //console.log(book);
    return shelf;
  } else {
    return shelf;
  }
}

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (book === shelf[i].title) {
      shelf.splice(i, 1);
      // return sciFiShelf;
    }
  }
}

function listTitles(shelf) {
   //for (var i = 0; i < fantasyShelf.length - 1; i++) {
   //console.log(fantasyShelf[i].title);
      var bookList = `${shelf[0].title}, ${shelf[1].title}, ${shelf[2].title}`;
      return bookList;
}

function searchShelf(shelf, bookTitle) {
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
