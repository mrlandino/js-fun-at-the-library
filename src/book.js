function createTitle(title) {
  //input: one parameter that is a string
  //function purpose: to take in a string and add the string "The" to the begginning of the string.
  //output: the output is an addition string
  return `The ${title}`;
}

function buildMainCharacter(nameInput, ageInput, pronounsInput) {
  //input: 3 parameters( a sting name, a numer age, and a string pronoun)
  //function purpose: add all of those parameter inputs to an object that has name, age, and pronouns as properties.
  //output: the object with all of those inputs
  var character = {
    name : nameInput,
    age : ageInput,
    pronouns : pronounsInput,
  };
  return character;
}

//OTHER OPTION FOR saveReview:
// function saveReview(reviewInput, reviews) {
//   if (reviews.indexOf(reviewInput) === -1) {
//     reviews.push(reviewInput);
//     return reviews;
//   } else if (reviews.indexOf(reviewInput) > -1) {
//     return reviews;
//   }
// }


function saveReview(reviewInput, reviewList) {
  //input: 2 parameters (a string review and an empty array reviewList)
  //function purpose: to be able to add the string review into the array as long as the review doesn't already exist in the array.
  //output: the array with or without the new string based on the function purpose.

  for (var i = 0; i < reviewList.length + 1; i++) {
    if (reviewInput !== reviewList[i]) {
      reviewList.push(reviewInput);
      //console.log(reviewList)
      return reviewList;
    } else {
      return
    }
  }
}

function calculatePageCount(bookTitle) {
  //input: a single parameter string.
  //function purpose: Take the inputed string, and multiply the characters in the string by 20 (including spaces)
  //output: the number pagecount.

    return (bookTitle.length * 20);
}

function writeBook(bookTitle, bookCharacter, bookGenre) {
  //input: 3 parameters (a string bookTitle, an object bookCharacter, and a string bookGenre )
  //function purpose: to take all of the parameters and put them into an object book.
  //output: a book object
  var book = {
    title : bookTitle,
    mainCharacter : bookCharacter,
    pageCount : calculatePageCount(bookTitle),
    genre : bookGenre,
  }
  return book;
}

function editBook(book) {
  //input: input the object book
  //function purpose: to change the pageCount property in the book object
  //output: the object with the new pageCount
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
