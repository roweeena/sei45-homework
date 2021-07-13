console.log('something silly');

// # Anagram Detector
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word. A word is an anagram if its letters can be rearranged to create a new word.
// In other words, given: `"listen"` and `["enlists", "google", "inlets", "banana"]` the program should return "inlets".
// Other examples: 
// * `"debit card"` and `["money", "bad credit", "consumerism"]`
// * `"define anagram"` and `["google", "joke", "nerd fame again"]`


// declare a function - 2 arguments: a word, an array
const anagram = function(word, list) {
  const matches = [];

  // sort the letters within a word
  const sortedWord = word.split('').sort().join('').trim();
  console.log(sortedWord);
  
  //compare with the sorted version of the words in that array
  for (let i = 0; i < list.length; i++) {
    const sortedListItem = list[i].split('').sort().join('').trim();

    if (sortedListItem === sortedWord) {
      matches.push(list[i]);
    }
  }
  console.log(`The anagram of "${word}" is "${matches.join(', ')}"`);
  return matches;
}

console.log(anagram("listen", ["enlists", "google", "inlets", "banana"]));
console.log(anagram("debit card", ["money", "bad credit", "consumerism"]));
console.log(anagram("define anagram", ["google", "joke", "nerd fame again"]));


