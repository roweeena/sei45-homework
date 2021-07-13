// # Mumble
// Write a function called mumble that accepts a single string argument: 
// - The function should return a string that has each character repeated the number of times according to its position within the string argument. Additionally, each repeated section of characters should be separated by a hyphen (-).
// Examples describe it best:
// ```javascript
// mumble('X'); //=> 'X'
// mumble('abc'); //=> 'a-bb-ccc'
// mumble('121'); //=> '1-22-111'
// mumble('!A 2'); //=> '!-AA-   -2222'
// ```

console.log('Am I doing this correctly?');

// declare my function
const mumble = function(string) {
  let result = [];

  // loop through the string, with each char, repeat it according to its index
  for (let i = 0; i < string.length; i++) {
    result.push(string[i].repeat(i + 1));
  }

  return result.join('-')
}

console.log(mumble('X'));
console.log(mumble('abc'));
console.log(mumble('121'));
console.log(mumble('!A 2'));
