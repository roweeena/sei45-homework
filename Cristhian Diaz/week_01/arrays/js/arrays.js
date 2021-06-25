// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

function maxOfTwoNumbers(a,b) {
  if (a > b) {
    return a;
  } else if (b > a){
    return b;
  } else {
    return ("The numbers are equal");
  }
};

console.log(maxOfTwoNumbers(2,5));

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

function maxOfThree(a,b,c) {
  if ((a > b) && (a > c)) {
    return a;
  } else if ((b > a) && (b > c)) {
    return b;
  } else if ((c > a) && (c > b)) {
    return c;
  } else {
    return ("The numbers are equal");
  }
};

console.log(maxOfThree(2,5,15));

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function vowelCheck(letter) {
  if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
    return true;
  } else {
    return false;
  }
};

console.log(vowelCheck("t"));
console.log(vowelCheck("i"));

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

function sumArray(array) {
  let result = 0;
  for (i=0;i<array.length;i++) {
    result += array[i];
  }
  return result;
};

function multiplyArray(array) {
  let result = 1;
  for (i=0;i<array.length;i++) {
    result *= array[i];
  }
  return result;
};

console.log(sumArray([1,2,3,4]));
console.log(multiplyArray([1,2,3,4]));

//
// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

function reverseString(string) {
  let reverse = "";
  for (i=string.length-1;i>=0;i--) {
    reverse += string[i];
  }
  return reverse;
}

console.log(reverseString("jag testar"));

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

function findLongestWord(words) {
  let longestLength = 0;
  for (i=0;i<words.length;i++) {
    if (words[i].length > longestLength) {
      longestLength = words[i].length;
    }
  }
  return longestLength;
}

console.log(findLongestWord(["car", "table", "supervisor", "desk"]));

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

function filterLongWords(words,i) {
  let filteredArray = [];
  for (j=0;j<words.length;j++) {
    if (words[j].length > i) {
      filteredArray.push(words[j]);
    }
  }
  return filteredArray;
}
console.log(filterLongWords(['cat','desk','phone','telephone','speaker'],3));
