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
//
// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// ```
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```
//
// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

let cardNumbers = "";

function validateCreditCard(cardInfo) {
  if (validateDigits(cardInfo) && differentDigits(cardNumbers) && finalDigit(cardNumbers) && sumDigits(cardNumbers)) {
    console.log("Valid credit card number. ");
  } else {
    console.log("Not a valid credit card number. ");
  }
};

function validateDigits(str) {
  cardNumbers = str.replace(/-/g, "");
  if (cardNumbers.length === 16) {
    if (Number(cardNumbers) === NaN) {
      return false;
    } else {
      // cardNumbers = (Number(cardNumbers));
      return true;
    }
  } else {
    return false;
  }
};

function differentDigits(num) {
  let counter = 0;
  for (let i = 0; i < num.length; i++) {
    if ((num[i]!==num[i+1]) && (i < 15)) {
      counter++;
    }
  }
  if (counter >= 1) {
    return true;
  } else {
    return false;
  }
};

function finalDigit(num) {
  if ((num[(num.length - 1)])%2 === 0) {
    return true
  } else {
    return false;
  }
};

function sumDigits(num) {
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }

  if (sum > 16) {
    return true
  } else {
    return false;
  }
};

validateCreditCard("9999-9999-8888-0000");
validateCreditCard("6666-6666-6666-1666");
validateCreditCard("a923-3211-9c01-1112");
validateCreditCard("4444-4444-4444-4444");
validateCreditCard("1111-1111-1111-1110");
validateCreditCard("6666-6666-6666-6661");
validateCreditCard("6666-6666-6666-66622");

// console.log(differentDigits("4444444444444444"));
// sumDigits("9999999988880000");
// validateDigits("9999-9999-8888-0000");
// console.log(cardNumbers);
// console.log(differentDigits("9999999988880000"));
