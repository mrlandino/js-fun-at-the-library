
function createLibrary(libraryName) {
//input: a single parameter (a string libraryName)
//function purpose: to create an object with multiple properties from a string libraryName input
//output: the library object with multiple properties
  var library =
  {
    name : libraryName,
    shelves : {
      fantasy : [],
      fiction : [],
      nonFiction : [],
    }
  }
  return library;
}

function addBook(publicLibrary, book) {
   // input: 2 parameters (an object publicLibrary, and an object book)
   //function purpose: to add the object book to the object publicLibrary -> that has a property shelves -> that has an object with 3 properties that are each empty arrays (fantasy, fiction, nonFiction)
  // output: adding an object book to the object publicLibrary -> shelves based on genre
   if (book.genre === "fantasy"){
     publicLibrary.shelves.fantasy.push(book);
   } else if (book.genre === "nonFiction"){
     publicLibrary.shelves.nonFiction.push(book);
   } else if (book.genre === "fiction"){
     publicLibrary.shelves.fiction.push(book);
   }
}

function checkoutBook (publicLibrary, bookName, genre) {
//input: 3 parameters(an object publicLibrary, a string bookName, and a string genre)
//function purpose: to check if the object publicLibrary has books on its shelves based on genre and to allow a patron to check it out. If the bookName and genre you are looking exists in the publicLibrary object, you will remove it from the shelf and return a string message. If the bookName and genre you are looking for doesnt exist at the publicLibrary object it will return a string message.
//output: a string message that says whether you check out the book or that the library doesnt have it.

//!!NOT SURE WHY THE .LENGTH OF MY FOR LOOP HAS TO BE - 1 IN THIS SITUATION????????

  if (genre === "fantasy" && publicLibrary.shelves.fantasy.length !== 0) {
    for (var i = 0; i < publicLibrary.shelves.fantasy.length - 1; i++); {
      console.log(publicLibrary.shelves.fantasy[i]);
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
