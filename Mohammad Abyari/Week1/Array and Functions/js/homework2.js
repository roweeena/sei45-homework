// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (num1,num2){
  if (num1 > num2){ console.log(`${num1} is greater than ${num2}`);
}else{ console.log(`${num2} is greater than ${num1}`);}
}
maxOfTwoNumbers(4,6);

//
// // 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
//
const maxOfThree = function (num1,num2,num3){
  if (num1 > num2 && num1 > num3){
    console.log(`${num1} is the largest`);
    return num1;
  }else if(num2 > num1 && num2 > num3){
    console.log(`${num2} is the largest`);
    return num2;
  }else{console.log(`${num3} is the largest`); }
    return num3;
}

maxOfThree(14,18,2);
maxOfThree(189,267,356);
//
//
// // 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
//
const character = function (chaRa){
  if (chaRa ===`a` || chaRa===`u` || chaRa===`o` || chaRa===`e` || chaRa===`i` ){
    console.log(`True`);
  }else{console.log(`False`);}
}
character(`a`);
character(`b`);
character(`o`);
//

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
//
// sumArray







// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
