// # Strings
//
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// ## DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ```
const drEvil = function (amount) {
  if (amount === 1000000) {
console.log(amount + " dollars (pinky)");
    return amount + "dollars (pinky)";

  } else {
console.log(amount + " dollars");
    return amount + "dollars";
  };
}
drEvil(10);
drEvil(1000000);



// ## MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```
const mixUp = function (string1, string2) {
  const sliceA= string1.slice(0, 2);
  const sliceAa = string1.slice(2);
  const sliceB = string2.slice(0,2);
  const sliceBb = string2.slice(2);
  return string = sliceB + sliceAa + " " + sliceA + sliceBb;
}

console.log(mixUp("dog", "dinner"));
console.log(mixUp("mix", "pod"));

// ## FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ``
const fixStart = function (string){
  let firstChar = string.charAt(0); // let first character equal the first index value of the string
  return firstChar + string.slice(1).split(firstChar).join("*"); // return a string where all occurences of its first character have been replaced with '*', except for the first character itself
}

console.log(fixStart("babble"));
console.log(fixStart("gaggle"));
console.log(fixStart("google"));
// ## Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```
const verbing = function (string) {
  if (string.length < 3) { //start at the end because this is an important consideration
    return string ;
  } else if(string.slice(-3) === "ing") {
    return string + "ly";
  } else { // all strings can have "ing" added so we need to consider what will happen if the string already has ing or is less than 3 characters
    return string + "ing";
  }
  }
console.log(verbing('swimming'));
console.log(verbing('go'));
console.log(verbing('eat'));

// ## Not Bad
//
// Create a function called notBad that takes a single argument, a string.
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
//
// For example:
// ```
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

const notBad = function (string) {
  let searchTerm1 = "not";
  let searchTerm2 = "bad";
  let notAppear =  string.indexOf(searchTerm1);
  let badAppear =  string.indexOf(searchTerm2);
  if (notAppear === -1 || badAppear === -1){ //working backwards again
    return string;
  }else {
    return string.slice(0, notAppear) + 'good' + string.slice(badAppear + 3); //returns first element of the array (aka the first part of the array) until the moment "not" appears , adds good, when "bad" appears takes out its 3 characters and keeps the rest of the sentence
  }
};
  console.log(notBad('This dinner is bad!'));
  console.log(notBad('This food is perfectly cooked!'));
  console.log(notBad('This movie is not so bad!'));
  console.log(notBad("This movie is not so bad but I wouldn't watch it again"));
