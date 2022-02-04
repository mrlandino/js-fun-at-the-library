function shelfBook(book, sciFiShelf) {
  if (sciFiShelf.length < 3) {
    sciFiShelf.unshift(book);
    //console.log(book);
    return sciFiShelf;
  } else {
    return sciFiShelf;
  }
}

function unshelfBook(book, sciFiShelf) {
  for (var i = 0; i < sciFiShelf.length; i++) {
    if (book === sciFiShelf[i].title) {
      sciFiShelf.splice(i, 1);
      // return sciFiShelf;
    }
  }
}

function listTitles(fantasyShelf) {
   //for (var i = 0; i < fantasyShelf.length - 1; i++) {
   //console.log(fantasyShelf[i].title);
      var bookList = `${fantasyShelf[0].title}, ${fantasyShelf[1].title}, ${fantasyShelf[2].title}`;
      return bookList;
}

function searchShelf(sciFiShelf, bookTitle) {
  for (var i = 0; i < sciFiShelf.length; i++) {
    if (sciFiShelf[i].title === bookTitle) {
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
