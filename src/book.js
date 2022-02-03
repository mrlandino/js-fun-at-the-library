function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name : name,
    age : age,
    pronouns : pronouns,
  };
  return character;
}

function saveReview(reviewInput, reviews) {
  if (reviews.indexOf(reviewInput) === -1) {
    reviews.push(reviewInput);
    return reviews;
  } else if (reviews.indexOf(reviewInput) > -1) {
    return reviews;
  }
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
