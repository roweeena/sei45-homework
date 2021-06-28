console.log("ba ba ba, ba ba na na");

// # Filter
// Your task is write a function that removes all duplicate words from a string, leaving only single (first) words entries.
// ## Example:
// Input:
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
// Output:
// 'alpha beta gamma delta'
// # Bonus question
// Create a function that returns a string 'banana'. The catch is you can only use letters 'a' and 'b'.
// Super extra bonus points for proving "how well engineered Javascript really is".


// declare the function 
const wordFilter = function (string) {
  let output = '';
  const outputArray = [];

  // turn the string into an inputArray
  const inputArray = string.split(' ');
  console.log(inputArray);

  // loop through inputArray, check if a word is included in that input Array
  // for (let i = 0; i < inputArray.length; i++) {
  //   const word = inputArray[i];
  //   if(!outputArray.includes(word)) {
  //     // console.log(`${word} is not included in the outputArray`);
  //     outputArray.push(word);
  //   } else {
  //     // console.log(`${word} is already included in the outputArray`);
  //   }
  // }

  /// forEach
  inputArray.forEach(word => {
    if (!outputArray.includes(word)) {
      outputArray.push(word);
    }
  });

  output = outputArray.join(' ');
  return output;
}

console.log(wordFilter('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));

/// BONUS

const banana = function() {
  const result = 'b' + 'a' + + 'a' + 'a';
  return result.toLowerCase();
}

console.log(banana()); // banana



