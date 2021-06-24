// console.log("Hello how are you?");

// ## Warmup - Serge Says
// Create a function that takes an input and returns Serge's response as following:
// * Serge answers 'Sure.' if you ask him a question.
// * He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
// * He says 'Fine. Be that way!' if you address him without actually saying anything.
// * He answers 'Whatever.' to anything else.

const sergeSays = function(message) {
  // let response = '';

  // * Serge answers 'Sure.' if you ask him a question.
  // if (message[message.length - 1] === '?') {
  if (message.endsWith('?')) {
    return 'Sure';

  // * He says 'Fine. Be that way!' if you address him without actually saying anything.
  } else if (message === '') {
    return'Fine. Be that way!';

  // * He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
  } else if (message === message.toUpperCase()) {
    return 'Woah, chill out!';

  // * He answers 'Whatever.' to anything else.
  } else {
    return 'Whatever.'
  }

}

console.log(sergeSays('The weather is good!!'));
console.log(sergeSays('Is the weather good?'));
console.log(sergeSays(''));
console.log(sergeSays('HEYYY'));

