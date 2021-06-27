// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle
//
// ```javascript
// const rectangleA = {
//   length: 4,
//   width: 4
// };
// ```

const rectangleA = {
  length: 4,
  width: 4
};
const rectangleB = {
  length: 5,
  width: 4
};

function isSquare(rectangle) {
  if (rectangle.length === rectangle.width) {
    return "It's a square.";
  } else {
    return "It's not a square.";
  }
};

console.log(isSquare(rectangleA));
console.log(isSquare(rectangleB));

function squareArea(rectangle) {
  const area = rectangle.width * rectangle.length;
  return area;
};

console.log(`The area is: ${squareArea(rectangleA)}`);
console.log(`The area is: ${squareArea(rectangleB)}`);

function perimeter(rectangle) {
  const perimeter = 2*(rectangle.width + rectangle.length);
  return perimeter;
};

console.log(`The perimeter is: ${perimeter(rectangleA)}`);
console.log(`The perimeter is: ${perimeter(rectangleB)}`);

//
// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//
// ```javascript
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// ```

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
const triangleB = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};
const triangleC = {
  sideA: 3,
  sideB: 7,
  sideC: 9
};

function isEquilateral(triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideC) {
    return "Triangle is equilateral.";
  } else {
    return "Triangle is not equilateral.";
  }
};
console.log(isEquilateral(triangleA));
console.log(isEquilateral(triangleB));
console.log(isEquilateral(triangleC));

function isIsosceles(triangle) {
  if ((triangle.sideA === triangle.sideB) || (triangle.sideA === triangle.sideC) || (triangle.sideB === triangle.sideC)) {
    return "Triangle is isosceles.";
  } else {
    return "Triangle is not isosceles.";
  }
};
console.log(isIsosceles(triangleA));
console.log(isIsosceles(triangleB));
console.log(isIsosceles(triangleC));

function triangleArea(triangle) {
  const perimeter = (triangle.sideA + triangle.sideB + triangle.sideC)/2;
  const area =  Math.sqrt(perimeter*((perimeter-triangle.sideA)*(perimeter-triangle.sideB)*(perimeter-triangle.sideC)));
  return area;
}
console.log(`The area of the triangle is: ${triangleArea(triangleA)}`);
console.log(`The area of the triangle is: ${triangleArea(triangleB)}`);
console.log(`The area of the triangle is: ${triangleArea(triangleC)}`);


function isObtuse(triangle) {
  const sqA = Math.pow(triangle.sideA, 2);
  const sqB = Math.pow(triangle.sideB, 2);
  const sqC = Math.pow(triangle.sideC, 2);

  if (sqA > sqC + sqB || sqB > sqA + sqC || sqC > sqA + sqB) {
    return "Triangle is obtuse.";
  } else {
    return "Triangle is not obtuse.";
  }
}
console.log(isObtuse(triangleA));
console.log(isObtuse(triangleB));
console.log(isObtuse(triangleC));
