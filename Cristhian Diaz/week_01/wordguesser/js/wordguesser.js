// # Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').

const wordLetters = ["F","O","X"];
const guessedLetters = ["_","_","_"];

// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
//

function guessLetter(letter) {
  let record = 0;
  for (i=0;i<wordLetters.length;i++) {
    if (letter.toUpperCase() === wordLetters[i]) {
      guessedLetters[i] = wordLetters[i];
      console.log(`Congratulations, you guessed a letter: '${ guessedLetters }'`)
    }
    if (guessedLetters[i] === wordLetters[i]) {
      record += 1;
      }
  };

  if (record === wordLetters.length) {
    console.log("You have won!")
  } else {
    console.log("Better luck next time")
  }
};

guessLetter("a");
guessLetter("b");
guessLetter("c");
guessLetter("f");
guessLetter("x");
guessLetter("d");
guessLetter("o");






// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.
//
console.log("");
console.log("Wheel of Fortune");
console.log("");

const wheelLetters = ["A","P","P","L","I","C","A","T","I","O","N"];
const lettersGuessed = ["_","_","_","_","_","_","_","_","_","_","_"];

let reward = 0;

function wheelLetter(letter) {

  let record = 0;
  let correctGuesses = 0;

  for (i=0;i<wheelLetters.length;i++) {

    if (letter.toUpperCase() === wheelLetters[i]) {
      lettersGuessed[i] = wheelLetters[i];
      console.log(`Congratulations, you guessed a letter: '${ lettersGuessed }'`);
      correctGuesses++;
    }
    if (lettersGuessed[i] === wheelLetters[i]) {
      record += 1;
      }
  };
  if (correctGuesses>0) {
    reward += Math.floor((Math.random() * 5)*correctGuesses);
  } else {
    reward--;
  }

  if (record === wheelLetters.length) {
    console.log(`You have won! Your reward is: $${ reward }`)
  } else {
    console.log("Better luck next time");
  }
};

wheelLetter("a");
wheelLetter("b");
wheelLetter("c");
wheelLetter("f");
wheelLetter("p");
wheelLetter("d");
wheelLetter("o");
wheelLetter("l");
wheelLetter("i");
wheelLetter("c");
wheelLetter("f");
wheelLetter("r");
wheelLetter("k");
wheelLetter("z");
wheelLetter("t");
wheelLetter("n");


// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
