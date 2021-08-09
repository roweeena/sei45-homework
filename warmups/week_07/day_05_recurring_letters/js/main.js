// ## Recurring Letters

// Create a function that takes in a sentence and outputs the letter that's repeated most frequently.

// ```js
// recurringLetter('just a simple sentence chilling');
// // => The recurring letter of "just a simple sentence chilling" is e
// ```

// Use simple sentences with regular spaces between each word (like in the sentence you are reading) but if you want you can account for other characters such as !@#$%^&*? etc..

// *Hint:* You'll need to loop and count each of the letters.

// **Bonus:** Create another function that capitalises a letter within the sentence. 
// ```js
// capitaliseLetter('just a simple sentence chilling', 'e');
// // => just a simplE sEntEncE chilling
// ```

// declare a function
const recurringLetter = function(string) {
  // store the counts of the letters - object, key: letter, value: count
  let letterCounts = _(string).countBy();

  // omit() to exclude a key-value pair from an object (exclude the blankspace count)
  letterCounts = _(letterCounts).omit(' ')
  console.log(letterCounts);

  // find the highest count
  // max()
  const maxScore = _(letterCounts).max();
  console.log(maxScore);

  let maxLetter = '';
  // find the most recurring letter 
  _(letterCounts).map((value, letter) => {
    // console.log(value, letter);
    if (value === maxScore) {
      maxLetter = letter;
    }
  })

  console.log(`The most recurring letter of "${string}" is "${maxLetter}" for ${maxScore} times`);
}

recurringLetter('just a simple sentence chilling');

const capitaliseLetter = function(string, letter) {
  // define the pattern
  let p = new RegExp(letter, "gi");
  console.log("p", p);

  // replace() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  let result = string.replace(p, letter.toUpperCase());
  return result;
}

console.log(capitaliseLetter('just a simple sentence chilling', 'e'));


