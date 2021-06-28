// // The Calculator
// //
// // Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
//
const squareNumber= function (aNumber){
    const result = aNumber * aNumber;
    console.log(`The result of squaring the number ${aNumber} is ${result}`);
    return result;
};

squareNumber(2);
squareNumber(4);
//
// // Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
//
//
const halfNumber = function (aNumber){
  const result = aNumber / 2;
  console.log(`Half of ${aNumber} is ${result}.`);
  return result;
}

halfNumber(10);
halfNumber(5);



//
// // Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
//


const percentOf = function(num1,num2) {
  const result = (num1/num2) * 100;
  console.log(`${num1} is ${result} % of ${num2}`);
  return result;
}
percentOf(5,9);
percentOf(2,4);

//
//
// // Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// // Bonus: Round the result so there are only two digits after the decimal.


const areaOfCircle = function (radius) {
  const area = radius * radius * 3.14;
  console.log(`The area for a circle with radius ${radius} is ${area}. `);
}

areaOfCircle(5);
areaOfCircle(3);


//
//Part 2
// // Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// // Take half of the number and store the result.
// // Square the result of #1 and store that result.
// // Calculate the area of a circle with the result of #2 as the radius.
// // Calculate what percentage that area is of the squared result (#3).
// //
// //
const fun = function (aNumber){
  const halfNum = aNumber / 2;
  console.log(halfNum);
  const double = halfNum * halfNum;
  console.log(double);
  const area = 3.14 * double * double;
  const percent = area / double * 100;
  console.log(percent);
  return halfNum;
  return double;
  return area;
  return percent;
};
//
fun(7);
