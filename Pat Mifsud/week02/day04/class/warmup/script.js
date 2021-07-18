// [1:31 AM] # Sum of arrays
// Write a function that receives two arguments, both of which are Arrays and sums them. These arrays contain only numbers. You don't know their length and they can contain both integers and floating point numbers.
// ## Example
// ```
//   [2, 6.4, 3] + [3, 3.6, 2] = 20
// ```
// # Bonus
// Create another version of the above function that can accept more than two arrays as the arguments (you don't know the specific number of arguments)


const summerer = function(){
  let result = 0;

  for (let i = 0; arguments.length > i; i++){
    arguments[i].forEach((int, i) => {
      result += Number(int);
    });
  }
  return result;
}


console.log(summerer([1,5.5,4], [34,5]));
console.log(summerer([1,5.5,4,234], [34,5], [1,243,4]));
