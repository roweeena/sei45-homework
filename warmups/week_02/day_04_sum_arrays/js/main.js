// # Sum of arrays
// Write a function that receives two arguments, both of which are Arrays and sums them. These arrays contain only numbers. You don't know their length and they can contain both integers and floating point numbers.

// ## Example
// ```
//   [2, 6.4, 3] + [3, 3.6, 2] = 20
// ```

// # Bonus
// Create another version of the above function that can accept more than two arrays as the arguments (you don't know the specific number of arguments).

console.log('Today is Thursday!');

const sum = function (array1, array2) {
  let result = 0;

  // loop through each array and add up each number to the result
  array1.forEach(num => {
    result += num;
  })

  array2.forEach(num => {
    result += num
  })

  return result
}
// console.log(sum([2, 6.4, 3], [3, 3.6, 2]));

const sumMultiple = function() {
  let result = 0;
  console.log(arguments);

  for (let i = 0; i < arguments.length; i++) {
    const array = arguments[i];

    for (let j = 0; j < array.length; j++) {
      result += array[j];
      console.log('Updating result', result);
    }
  }

  return result;
}

console.log(sumMultiple([2, 6.4, 3], [3, 3.6, 2], [2, 6.4, 3], [3, 3.6, 2]));