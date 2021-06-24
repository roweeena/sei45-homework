// ## Warmup - Serge Says
// Create a function that takes an input and returns Serge's response as following:
//
// * Serge answers 'Sure.' if you ask him a question.
//
// * He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// * He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// * He answers 'Whatever.' to anything else.
//

const isUpper(str) = function {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);};
// console.log(isUpper("STR"));
// console.log(isUpper("ST R"));
// console.log(isUpper("str"));

const talkToSerge = function(input){
  const stringLength = [...input].length;
  const lastLetter = input.charAt(stringLength -1);

  if(lastLetter === "?"){
      return `Sure.`;
    } else if (isUpper(input)) {
      return `Woah, chill out!`;
    } else if (input === ""){
      return `Fine. Be that way!`;}
  return `Whatever.`;
};

console.log("")
console.log(talkToSerge("hello"));
console.log(talkToSerge("hello?"));
console.log(talkToSerge("HELLO"));
console.log(talkToSerge(""));
console.log("")
