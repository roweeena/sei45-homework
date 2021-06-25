
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.


// # Array and Functions Bonus Material
// 1. maxOfTwoNumbers
const maxOfTwoNumbers = function(num1, num2){
  if (num1 > num2){
    return `${num1} is the largest number`
  } else{
    return `${num2} is the largest number`}}

console.log(maxOfTwoNumbers(1000, 1));
console.log("");


// 2. maxOfThreeNumbers
const maxOfThreeNumbers = function(num1, num2, num3){
  const array = [num1, num2, num3];
  const orderedArray = array.sort((a,b) => b-a);
  return `${orderedArray[0]} is the largest number`;}

console.log(maxOfThreeNumbers(100, 48, 242));
console.log("");


// 3. vowelOrNot
const vowelOrNot = function(a){
  const vowels = ["a", "e", "i", "o", "u"];
  for(var i = 0; i < vowels.length; i++) {
    if(vowels[i] == a){
      return true;
    } else { return false;}}};

console.log("Vowel or not - a: " + vowelOrNot("a"));
console.log("Vowel or not - r: " + vowelOrNot("r"));
console.log("");


// 4. sum and multiply array
const arrayOfNumbers = [13,4,2,5];

const sumArray = function(arr){
  let result = 0;
  for( let i = 0; i < arr.length; i++) {
    result += arr[i] ;};
  return result };

const multiplyArray = function(arr){
  let result = arr[0];
  for( let i = 1; i < arr.length; i++) {
      result *= arr[i];};
  return result };

console.log("sumArray:" + sumArray(arrayOfNumbers));
console.log("multiplyArray:" + multiplyArray(arrayOfNumbers));
console.log("");


// ## Bonus
// 5. sum and multiply array
const reverseString = function(string){
  const stringArray = string.split('');
  const reversedArray = stringArray.reverse();
  return(reversedArray.join(""))};

console.log("reversed string: " + reverseString("abcdef"));
console.log("");


// 6. findLongestWord
const findLongestWord = function(array){
  const sortedArray = array.sort((a,b) => b.length - a.length);
  return (sortedArray[0]);};

console.log("longest work: " + findLongestWord(["abcdef", "hidgishdi", "ah", "oooooooooooooooh"]));
console.log("");


// 7. findLongestWord
const filterLongWords = function(array, limit){
  const thisTallToRideFunction = [];
  for (let i = 0; i < array.length; i++){
    if( array[i].length > limit){
      thisTallToRideFunction.push(array[i]);
  }};
  return (thisTallToRideFunction.join(", "))
};

console.log("words longer than 6 letters: " + filterLongWords(["Metropilos", "pop", "ah", "1234567", "looongword"], 6));
console.log("");
