// raindrops exercise//
const isFactor = function (num) {
  let factor = " ";
  if (num % 3 === 0) {
    console.log("pling");
  }
  else if (num % 5 === 0) {
    console.log("plang");
  }
  else if (num % 3 === 0 && num % 5 == 0) {
    console.log("plingplang");
  }
  else if (num % 7 === 0){
    console.log("plong");
  } else{
    console.log(num.toString());
  }
};

isFactor(28);
isFactor(1755);
isFactor(9);
isFactor (16);

// # Filter
//
// Your task is write a function that removes all duplicate words from a string, leaving only single (first) words entries.
//
// ## Example:
//
// Input:
//
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
//
// Output:
//
// 'alpha beta gamma delta'


const firstWord = function (string) {
  let result = string.split(" ");
  let duplicate = [];
  for (i=0; i<string.length; i++) {
    if(result.indexOf(result[i]) !== result.lastIndexOf(result[i])){
         if(!duplicate.includes(result[i])){
            duplicate.push(result[i]);
         };
      };
   };
   return duplicate.join(" ");
};
console.log(firstWord("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"));
