const squareNumber = function (num){
  console.log(`The result of squaring the number ${num} is ${num**2}`);
  return num**2;
};

const halfNumber = function (num){
  console.log(`Half of ${num} is ${num/2}`);
  return num/2;
};

const percentOf = function (a,b){
  console.log(`${a} is ${((a/b)*100).toFixed(2)}% of ${b}`);
  return (a/b).toFixed(2);
};

const areaOfCircle = function (radius){
  console.log(`The area for a circle with radius ${radius} is ${(Math.PI*radius**2).toFixed(2)}`);
  return (Math.PI*radius**2).toFixed(2);
};


const calculate = function (num){
  const c1 = halfNumber(num);
  const c2 = squareNumber(c1);
  const c3 = areaOfCircle(c2);
  const c4 = percentOf(c2,c3);
  return null;
};
