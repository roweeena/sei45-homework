// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(maxOfTwoNumbers(10, 6));


// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function (a, b, c) {
  if (a > b && a > c) {
    return a;
  } if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
}
console.log(maxOfThree(4, 7, 9));
console.log(maxOfThree(10, 7, 8));
console.log(maxOfThree(9, 15, 6));
console.log(maxOfThree(9, 14, 9));


// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const vowel = function (char) {
  char = char.toLowerCase();
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true;
  } else {
    return false;
  }
}
console.log(vowel('a'));
console.log(vowel('c'));
console.log(vowel('I'));


// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
const sumArray = function (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log(sumArray([1,2,3,4])); // 10
console.log(sumArray([4,2,3,4])); // 13


// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
const reverseString = function (str) {
  let reverse = '';
  for (let i = str.length-1; i >= 0 ; i--) {
    reverse = reverse += str[i];
  }
  console.log(reverse);
}
reverseString('ali');
reverseString('ghasem');

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
const findLongestWord = function (arr) {
  let charNum = 0;
  let largest;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > charNum) {
      charNum = arr[i].length;
      largest = arr[i];
    }
  }
  console.log(largest);
}
findLongestWord(['elephant', 'cat', 'bird']);

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
const filterLongWords = function (arr, i) {
  let longWordsArray = [];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].length > i) {
      longWordsArray.push(arr[j]);
    }
  }
  console.log(longWordsArray);
}
filterLongWords(['giraffe', 'cat', 'bird', 'elephant'], 4);

// # Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').
// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
const word = ['F', 'O', 'X'];
const guessedWord = ['\_', '\_', '\_'];

const guessLetter = function (letter) {
  if (word.includes(letter)) {
    if (letter === 'F') {
      guessedWord[0] = 'F';
      console.log(`Congratulations! You have found a letter: ${guessedWord}`);
    } else if (letter === 'O') {
      guessedWord[1] = 'O';
      console.log(`Congratulations! You have found a letter: ${guessedWord}`);
    } else if (letter === 'X') {
      guessedWord[2] = 'X';
      console.log(`Congratulations! You have found a letter: ${guessedWord}`);
    }
  } else {
    console.log(`Try again!`);
  } if (guessedWord.includes('\_') === false) {
    console.log(`🎉🎉 You have won 🎉🎉`);
  }
}
guessLetter('X');
guessLetter('F');
guessLetter('S');
guessLetter('O');
