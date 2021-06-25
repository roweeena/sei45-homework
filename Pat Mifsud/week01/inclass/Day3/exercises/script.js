// # Exercises: Objects
//
// ## The Recipe Card

const recipe = {
  title : 'Cheese Cake',
  servings : 3,
  ingredients : ['egg', 'butter', 'oil', 'sand', 'cheese']
}

console.log(` `);
console.log(`🎂 ` + recipe.title);
console.log("Serves: " + recipe.servings);

console.log(`Ingredients:`);

for (let i = 0; i < recipe.ingredients.length; i++) {
  console.log("- " + recipe.ingredients[i]);
}

console.log(` `);


// ## The Reading List
console.log(`📚`);
const bookShelf = [
  book1 = {
    title:'How to read books',
    author:'Arthur Authorson',
    read: false,
  },
  book2 = {
    title:'How to not read books',
    author:'Whitlem Writersworth',
    read: true,
  }
]
const browseBooks = function(){
  for(i=0; i < bookShelf.length; i++ ){
    const bk = bookShelf[i];
    console.log(`${bk.read ? "📗 You have read" : "📕 You still need to read"} "${bk.title}" - ${bk.author}`)
  }
}

browseBooks();

console.log(` `);


// ## The Movie Database


//
// It's like IMDB, but much much smaller!
//
// - Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).


const LMBD = [
  movie1 = {
    title:'How to watch movies',
    duration: 40,
    stars: ["David Hassolhoft, You"],
  },
  movie2 = {
    title:'How to watch movies',
    duration:40,
    stars: ["Star1, Star2"],
  }
]

// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

const browseMovies = function(){
  let result = '';
  for(i=0; i < LMBD.length; i++ ){
    const mv = LMBD[i];
    result += `🍿 ${mv.title} lasts for ${mv.duration} minutes. Stars ${mv.stars}. \n \n`;
  };
  return(result);
};
console.log(browseMovies());
