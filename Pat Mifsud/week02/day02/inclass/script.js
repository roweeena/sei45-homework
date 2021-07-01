// # Anagram Detector
//
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word. A word is an anagram if its letters can be rearranged to create a new word.
//
// In other words, given: `"listen"` and `["enlists", "google", "inlets", "banana"]` the program should return "inlets".
//
// Other examples:
// * `"debit card"` and `["money", "bad credit", "consumerism"]`
// * `"define anagram"` and `["google", "joke", "nerd fame again"]`


const anagramOrNot = function(str, arr){
  const anagrams = [];
  const letters = [...str];

  for (i = 0; i < arr.length; i++){

    let wordToTest = [...arr[i]];
    let lettersToTest = letters[Object];

    for (Object in letters){
      if (letters[Object] === wordToTest[i]){
        console.log(wordToTest);
        wordToTest.splice(i, 1);
        lettersToTest = lettersToTest.splice(i, 1);
      }
    }

    if (wordToTest.length === 0 && lettersToTest.length === 0){
        anagrams += arr[i];
      };

  }
  return (anagrams);
}



const anagramaybe = ["enlists", "google", "inlets", "banana"];

anagramOrNot("listen", anagramaybe);
