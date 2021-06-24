// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function (x, y) { //trying to find the bigger number between two numbers
  if (x > y) { //if x is greater than y, then return x
    return x;
  }else {
    return y;  // if not then return y as the greater number
  }
};
console.log (maxOfTwoNumbers(4,5));
console.log (maxOfTwoNumbers(25,4));
console.log (maxOfTwoNumbers(7,4));

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

  const maxOfThree = function  (x, y, z) {
    return Math.max(x, y, z); // function returns the largest of numbers in the given argument
};
console.log(maxOfThree(4, 5, 78));
console.log(maxOfThree(100, 5, 78));



// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const findVowel = function (string) {
  if (string.length === 1) {
    return /[aeiou]/.test(string);
  }
}
console.log(findVowel("s"));
console.log(findVowel("e"));
console.log(findVowel("i"));
// or a different solution to number three
const isVowel = function (character) {
  const vowels = ["a","e", "i", "o", "u"]
  for (let i=0; i < vowels.length; i++ ) { //loop through string to test if each character is a vowel
    if (character === vowels[i]){
      return true; // return true if character is a vowel
    }
    }
    return false; //if not a vowel, return false
  }
console.log(isVowel("s"));
console.log(isVowel("a"));
console.log(isVowel("i"));
console.log(isVowel("r"));

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
const sumArray = function (array) {
    let sum = null;
    for (let i=0; i<array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}
console.log(sumArray([1,2,3,4]));

const multiplyArray = function (array) {
    let multiplies = array[0];  //  declaring this variable to access elements in the array we'll call later
    for (let i=0; i<array.length; i++) {  //iterate through the whole  array
        multiplies = multiplies * array[i]; // each element of the string is multiplied
    }
    return multiplies;
}
console.log(multiplyArray([4,2,3,4]));
// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
const reverseString = function (string) {
  let newString = " "; //create empty string to host the new string
  for (let i=string.length -1; i >=0; i--){ //initialiser will be (string.length -1) which corresponds to the last character of the string. If i  is greater than or equal to 0, the loop will continue. "i" decreases by 1 after each iteration of the loop
    newString = newString + string[i]; // the new string will reverse each character
  }
  return newString;
}
console.log(reverseString("hello")); // calling the function to the console
console.log(reverseString("jag testar"));

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
const findLongestWord = function (arr) {
  let longest = " ";
  for (let i = 0; i<arr.length; i++) {
    if (arr[i].length > longest.length){
      longest = arr[i];
    }
  }
  return longest;
}
console.log(findLongestWord(['boop', 'bloomburg', 'hello']));
console.log(findLongestWord(['yo', 'mario', 'cadaver']));
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

const filterLongWords = function(str, i){
  let longestWords = [];
  for (i = 0; i < str.length; i++) {
    if (str[i].length > i) {
      longestWords.push(str[i]);
    }
  }
  return longestWords;
}
console.log(filterLongWords(['boop', 'bloomburg', 'look', "are"]));
console.log(filterLongWords(['dogs', 'cat', 'bird', "yo", "zebra", "elephant"]));
