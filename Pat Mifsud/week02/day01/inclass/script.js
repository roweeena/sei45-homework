// # Filter
// Your task is write a function that removes all duplicate words from a string, leaving only single (first) words entries.
// ## Example:
// Input:
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
// Output:
// 'alpha beta gamma delta'
// # Bonus question
// Create a function that returns a string 'banana'. The catch is you can only use letters 'a' and 'b'.
// Super extra bonus points for proving "how well engineered Javascript really is".


const wordFilter = function(str){
  const wordArr = str.split(" ");
  const uniqueWords = [...new Set(wordArr)];
  return uniqueWords.join(', ');
}

const testString = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta';

console.log(wordFilter(testString))


const banana = function(){
  let number = parseInt("string");
  return `Ba${number}a`;
}
console.log(banana())
