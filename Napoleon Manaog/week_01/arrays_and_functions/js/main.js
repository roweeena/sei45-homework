/*
Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
*/
const maxOfTwoNumbers = function (a,b){
  return (a>b) ? a : b;
};

/*
Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
*/

const maxOfThree = function (a,b,c){
  if (a>b && a>c) return a;
  else if (b>c && b>a) return b;
  else return c;
};


/*
Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
const isVowel = function(char=0){
  const vowels = ['a','e','i','o','u'];
  if (char === 0) return null;
  if (char.length !=1) return null;

  for (var i = 0; i < vowels.length; i++) {
    if(char==vowels[i]) return true;
  }
  return false;
};

/*
  Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
*/
const sumArray = function (arr=null){
  let sum = 0;
  if (arr===null) return null;
  else if (arr.length===1) return arr[0];
  else {
    for (var i = 0; i < arr.length; i++) {
      sum+=arr[i];
    }
  }
  return sum;
};

const multiplyArray = function (arr=null){
  let mul = 1;
  if (arr===null) return null;
  else if (arr.length===1) return arr[0];
  else {
    for (var i = 0; i < arr.length; i++) {
      mul*=arr[i];
    }
  }
  return mul;
};

/*
  Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/
const reverseString = function (str=null){
  let rev = [];
  if (str===null || str.split('').length===0 ) return null;
  else if (str.split('').length ===1) return str[0];
  else {
    for (let i=(str.length-1); i>-1 ; i--) {
      rev[(str.length-1)-i] = str[i];
    }
  }
  return rev = rev.join('');
};

/*
  Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
*/
const findLongestWord = function (arr_w=null){
  let lword = '';
  if (arr_w===null || arr_w.length===0 ) return null;

  lword = arr_w[0];
  for (let i = 1; i < arr_w.length; i++) {
    if(lword.length > arr_w[i].length) lword = (arr_w[i]);
    else lword = arr_w[i];
  }

  return lword;
};

/*
  Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
*/
const filterLongWords = function (arr_w=null,num=0){
  let lwords = [];
  if (arr_w===null || arr_w.length===0 ) return null;
  for (let i = 0; i < arr_w.length; i++) {
    if (arr_w[i].length > num ) lwords.push(arr_w[i]);
  }
  return lwords;
};
