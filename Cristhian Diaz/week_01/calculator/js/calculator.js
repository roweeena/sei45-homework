function squareNumber(number) {
  const result = Math.pow(number, 2);
  console.log(`The result of squaring the number ${ number } is ${ result }.`);
  return result;
};

function halfNumber(number) {
  const result = number / 2;
  console.log(`Half of ${ number } is ${ result }.`);
  return result;
};

function percentOf(numberOne, numberTwo) {
  const percentage = (numberOne*100)/numberTwo;
  console.log(`${ numberOne } is ${ percentage }% of ${numberTwo}.`);
  return percentage;
};

function areaOfCircle(radius) {
  const area = Math.pow(radius, 2) * Math.PI;
  const result = +(Math.round(area + "e+2")  + "e-2");
  console.log(`The area for a circle with radius ${ radius } is ${ result }.`);
  return area;
};
areaOfCircle(2);
// To round up to 2 decimals https://www.delftstack.com/howto/javascript/javascript-round-to-2-decimal-places/
// function roundToTwo(num) {
//     return +(Math.round(num + "e+2")  + "e-2");
// }
// console.log(roundToTwo(2.005));

function partTwo(number) {
  const half = halfNumber(number);
  const square = squareNumber(half);
  const circleArea = areaOfCircle(square);
  const percentage = percentOf(circleArea, square);

  console.log(`Half number: ${half}, Square number: ${square}, Circle area: ${circleArea}, Percentage: ${percentage}.` )
};

partTwo(5);
