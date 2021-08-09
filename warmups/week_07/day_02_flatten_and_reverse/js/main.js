// ## Arrays - Flatten and Reverse
// The goal of this exercise is to manipulate arrays by creating a function that can reverse an array and by creating a function that can flatten an array. Do not use any libraries to complete this task - write this stuff from scratch using standard JS methods and objects.
// - Make two functions
//   - reverse
//   - flatten
// ```js
// reverse( [1, 2, 3, 4] );
// // => [ 4, 3, 2, 1 ]
// flatten( ["Hello", ["World", 42] ] );
// // => [ "Hello", "World", 42 ]
// ```
// You only need to make flatten work to one level deep! You should be able to flatten this - ` ["Hello", ["World"]] ` - but not this - ` ["Hello", [[["World"]]]] `
// ## Bonus
// Make one that flattens any array that you pass into it: ` ["Hello", [[["World"], 42]]] ` -> `[ "Hello", "World", 42 ]`

const reverse = function(array) {
  let resultArray = [];

  array.forEach(element => {
    resultArray.unshift(element);
  });

  return resultArray;
}

// console.log(reverse([1, 2, 3, 4]));

const flatten = function(array) {
  let resultArray = [];

  // loop through the array
  array.forEach(element => {
    // check if the element is an array 
    // if no, push it into resultArray
    console.log('element', element);
    if (!Array.isArray(element)) {
      resultArray.push(element);
    } else {
      // if yes, flatten it
      // spread operator
      resultArray = [...resultArray, ...element];
    }
  })

  return resultArray;
}

// console.log(flatten(["Hello", ["World", 42] ] ));

const flattenMultiple = function(array, flattenedArray = []) {
  let resultArray = flattenedArray;
  console.log("-------- function is called");
  console.log("array", array);
  console.log("flattenedArray", flattenedArray);

  array.forEach(element => {
    console.log("element", element);
    if (!Array.isArray(element)) {
      resultArray.push(element);
    } else {
      // element is an array
      flattenMultiple(element, resultArray);
    }
  })
  return resultArray;
}

console.log(flattenMultiple(["Hello", [[["World"], 42]]]));
