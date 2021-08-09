// # Pairwise

// Write a function that accepts an array and a number, from the array find the element pairs whose sum equal to that number, and return the sum of their indices.

// If there are multiple valid pairs that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

// For example:
// ```js
// pairwise([7, 9, 11, 13, 15], 20)
// // => return 6
// // The pairs that sum to 20 are [7, 13], [9, 11] at indices: 0, 3, 1, 2 (total: 6).

// pairwise([1, 6, 12, -2, 0, 7, 9, 9], 10) 
// // => returns 11. 
// // The pairs that sum to 10 are [1, 9], [12, -2] at indices: 0, 6, 2, 3 (total: 11).
// ```
// ## Bonus

// `pairwise` function also prints out all the pairs of indices in the array when the sum is equal to a specific number.

// For example:
// ```js
// pairwise([1, 6, 12, -2, 0, 7, 9, 9], 10) 

// // Expect to print out:

// // There is a pair at indices: [2, 3]

// // There is a pair at indices: [0, 6]

// ```

// declare the function
const  pairwise = function(array, number) {
  // store the numToFind in an object
  const numToFindObj = {};
  const indices = [];
  let sumIndices = 0;
  console.log("array", array);

  // loop through the array 
  array.map((arrayNum, index) => {
    // check if that number is one of the numToFind
    // No: store numToFind of that number

    if (!numToFindObj.hasOwnProperty(arrayNum)) {
      let numToFind = number - arrayNum;
      numToFindObj[numToFind] = index;
      
    // Yes: you have 2 numbers that can sum
    } else {
      // push into indices array the indices pair
      indices.push([numToFindObj[arrayNum], index]);
      sumIndices += numToFindObj[arrayNum] + index;

      // remove the numToFind out of the numToFindObj to avoid duplication 
      delete numToFindObj[arrayNum];
    }
  })

  console.log("----- result:");
  console.log("numToFindObj", numToFindObj);
  console.log("indices", indices);
  console.log("sumIndices", sumIndices);
}

pairwise([7, 9, 11, 13, 15], 20);
// pairwise([1, 6, 12, -2, 0, 7, 9, 9], 10);


