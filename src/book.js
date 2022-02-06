function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(nameInput, ageInput, pronounsInput) {
  var character = {
    name : nameInput,
    age : ageInput,
    pronouns : pronounsInput,
  };
  return character;
}

// function saveReview(reviewInput, reviews) {
//   if (reviews.indexOf(reviewInput) === -1) {
//     reviews.push(reviewInput);
//     return reviews;
//   } else if (reviews.indexOf(reviewInput) > -1) {
//     return reviews;
//   }
// }


function saveReview(reviewInput, reviewList) {
  //this function needs to take in 2 parameters a string and an array
  //the array they are invoking is the reviews array that they declare in the test
  //
  for (var i = 0; i < reviewList.length + 1; i++) {
    if (reviewInput !== reviewList[i]) {
      reviewList.push(reviewInput);
      console.log(reviewList)
      return reviewList;
    } else {
      return
    }
  }
}

function calculatePageCount(bookTitle) {
  //console.log("$$", bookTitle);
  //input: bookTitle - string
  //output: should be 340
  //check how many letters are in the string bookTitle
  //taking that number of characters (including spaces) in the string and * by 20
  //return the result number
  //console.log(bookTitle.length)
    return (bookTitle.length * 20);
}

function writeBook(bookTitle, bookCharacter, bookGenre) {
  //output object
  //input
  var book = {
    title : bookTitle,
    mainCharacter : bookCharacter,
    pageCount : calculatePageCount(bookTitle),
    genre : bookGenre,
  }
  return book;
}

// function editBook(ghoulBook) {
//   ghoulBook.pageCount = 255;
//     //console.log(ghoulBook);
// }
function editBook(book) {
  book.pageCount = book.pageCount * .75;
  return book;
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
