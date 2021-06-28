// # Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').

const wordGuess = ["F", "O", "X"];
const guessedLetter = ["_", "_", "_"] ;

// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

const guessLetter = function (letter) {
  let guess = 0;
  for (i=0; i<wordGuess.length; i++) {
    if (letter.toUpperCase() === wordGuess[i]) {
      guessedLetter[i] = wordGuess[i];
      return "Congratulations, you guessed a letter: " + guessedLetter;
     if( guessedLetter[i] === wordGuess[i]) {
      guess = guess + wordGuess[i];

    }
  }
  }
};
      if ( guess === wordGuess.length) {
        return "You have won!";
      }  else {
      return "Sorry, guess again!";
    }
  };

console.log(guessLetter("f"));
console.log(guessLetter("q"));
console.log(guessLetter("X"));
console.log(guessLetter("o"));
