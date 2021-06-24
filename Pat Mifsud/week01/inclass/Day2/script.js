
// raindrops
const rainDrops = function(num){

  let result = '';

  if (num % 3 == 0){
    result += `Pling `
  }
  if (num % 5 == 0){
    result += `Plang `
  }
  if (num % 7 == 0){
    result += `Plong `
  }
  if (result == ''){
    return num;
  }

  return result;
}

console.log(rainDrops(1));


// For loops
const evenOddReporter = function(num){
  for (let i = 0; i <= 20; i++){
    if ( i % 2 === 0){
      return(`${i} is even`);
    } else {
      return(`${i} is odd`);
    }
  }
}

console.log(evenOddReporter(23));
console.log(evenOddReporter(22));



// Arrays


const topDrinks = ["coffee", "soda water", "pale ale", "orange juice"];
const rank = ["1st", "2nd", "3rd", "4th"];

const myTopDrinks = function(drinks){
  for (let i = 0; i < drinks.length; i++){
    console.log( `My ${rank[i]} favorite drink is ${drinks[i]}`);
  }
}


console.log(myTopDrinks(topDrinks));
