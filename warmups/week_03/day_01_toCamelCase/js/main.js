// # toCamelCase
// Write a function called toCamelCase that accepts a single string as an argument:
// - The toCamelCase function should return the string as camel-cased, removing each `_` or `-` characters and capitalizing the character following the `_` or `-`.
// - If the string argument does not contain a `_` or a `-`, return the same string.
// ## Bonus:
// - This is a great challenge for using regular expressions combined with the `String.replace` method. (If not, nevermind for now!)
// ```Javascript
// Examples:
// toCamelCase( 'sei' ) // => 'sei'
// toCamelCase( 'sei-rocks' ) // => 'seiRocks'
// toCamelCase( 'banana_Turkey_potato' ) // => 'bananaTurkeyPotato'
// toCamelCase( 'Mama-mia' ) // => 'MamaMia'
// toCamelCase( 'A_b_c' ) // => 'ABC'
// ```

//// 1st VERSION: String

// declare a function accepts a tring
const toCamelCase = function(string) {
  let result = string.split('');
  // console.log(result);

  // loop through the result to find '-' and '_'
  for (let i = 0; i < result.length; i++) {
    if (result[i] === '-' || result[i] === '_') {
      // replace with the capitalized char
      result.splice(i, 1); // remove 1 element at index i

      result[i] = result[i].toUpperCase();
      // console.log(result[i]);
    }
  }

  return result.join('');
}

//// 2nd VERSION: Regex

// declare the function
// const toCamelCase = function(string) {
//   let result = string;
//   let partsToBeReplaced = [];

//   // define the pattern
//   const p = /[-_]\w/g; // a allows it to run recursively

//   // find the matches from pattern
//   partsToBeReplaced = string.match(p);
//   console.log(partsToBeReplaced);

//   // replace the matches with the capitalized char
//   for (let i = 0; i < partsToBeReplaced.length; i++) {
//     // console.log(partsToBeReplaced[i]);
//     // console.log(partsToBeReplaced[i][1].toUpperCase());
//     result = result.replace(partsToBeReplaced[i], partsToBeReplaced[i][1].toUpperCase());
//     // console.log('result', result);
//   }
//   return result;
// }

// 3nd VERSION: Regex - shortest version - complicated - YOU DON'T NEED TO UNDERSTAND IT NOW - THIS IS FOR NERDS ONLY
// const toCamelCase = function(string) {
//   return string.replace(/[-_]\w/g, function(match) {
//     return match[match.length - 1].toUpperCase();
//   })
// }


console.log(toCamelCase('sei-rocks'));
// console.log(toCamelCase('sei'));
// console.log(toCamelCase('banana_Turkey_potato'));
// console.log(toCamelCase('Mama-mia'));
// console.log(toCamelCase('A_b_c'));
