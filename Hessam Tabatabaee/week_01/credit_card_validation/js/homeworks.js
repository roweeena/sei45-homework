// # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16
//
// The following credit card numbers are valid:
//
// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`
//
// The following credit card numbers are invalid:
//
// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number
//
// ## Example
// ```
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// ```
//
// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.
// const validateCreditCard = function (num) {
//   const allEqual = function (input) {
//     return input.split('').every(char => char === input[0]);
//   }
//   const newNum = num.replace(/-/g, '');
//   const numArr = newNum.split('');
//   const arrNum = numArr.map(parseFloat);
//   const evenLastNum = arrNum[arrNum.length-1];
//   let sumOfNums = 0;
//   for (let k = 0; k < arrNum.length; k++) {
//     sumOfNums += arrNum[k];
//   }
//   if (arrNum.every(Number.isInteger) && newNum.length === 16 && sumOfNums > 16 && allEqual(newNum) === false && evenLastNum / 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(validateCreditCard('9999-9999-8888-0000'));
// console.log(validateCreditCard('1111-1111-1111-1110'));
// console.log(validateCreditCard('4444-4444-4444-4444'));
// console.log(validateCreditCard('6666-6666-6666-6661'));
// console.log(validateCreditCard('a923-3211-9c01-1112'));

// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// ```
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```
const allEqual = function (input) {
  return input.split('').every(char => char === input[0]);
} // function to check if all characters in a string are the same and return true

const validateCreditCard = function (num) {
  const newNum = num.replace(/-/g, '');
  const numArr = newNum.split('');
  const arrNum = numArr.map(parseFloat);
  const evenLastNum = arrNum[arrNum.length-1];
  let sumOfNums = 0;
  for (let k = 0; k < arrNum.length; k++) {
    sumOfNums += arrNum[k];
  }
  if (arrNum.every(Number.isInteger) && newNum.length === 16 && sumOfNums > 16 && allEqual(newNum) === false && evenLastNum / 2 === 0) {
    const validCard = {valid: true, number: num};
    console.log(validCard);
  } else {
    const invalidCard = {valid: false, number: num};
    console.log(invalidCard);
  }
}
validateCreditCard('9999-9999-8888-0000');
validateCreditCard('1111-1111-1111-1110');
validateCreditCard('4444-4444-4444-4444');
validateCreditCard('6666-6666-6666-6661');
validateCreditCard('a923-3211-9c01-1112');
// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
