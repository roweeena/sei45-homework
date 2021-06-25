// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
const rectangleA = {
  length: 4,
  width: 4
};
const rectangleB = {
  length: 6,
  width: 5
};

// * isSquare - Returns whether the rectangle is a square or not
const isSquare = function (rectangle) {
  const result = `A rectangle with length, ${rectangle.length} and width, ${rectangle.width}:\n`;
  if (rectangle.length === rectangle.width) {
    console.log(result + 'is a Square!');
  } else {
     console.log(result + 'is a Rectangle!');
  }
}
isSquare(rectangleA);
isSquare(rectangleB);

// * area - Returns the area of the rectangle
const area = function (rectangle) {
  const result = rectangle.length * rectangle.width;
  console.log(`area: ${result}`);
}
area(rectangleA);
area(rectangleB);
// * perimeter - Returns the perimeter of the rectangle
const perimeter = function (rectangle) {
  const p = 2 * (rectangle.length + rectangle.width);
  console.log(`perimeter: ${p}`);
}
perimeter(rectangleA);
perimeter(rectangleB);

// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
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
  sideA: 6,
  sideB: 2,
  sideC: 1
};
const triangleD = {
  sideA: 6,
  sideB: 3,
  sideC: 4
};

// * isEquilateral - Returns whether the triangle is equilateral or not
const isEquilateral = function (triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC) {
    console.log("True");
  } else {
    console.log("False");
  }
}
isEquilateral(triangleA);
isEquilateral(triangleB);

// * isIsosceles - Returns whether the triangle is isosceles or not
const isIsosceles = function (triangle) {
  if (triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || triangle.sideB === triangle.sideC) {
    console.log("True");
  } else {
    console.log("False");
  }
}
isIsosceles(triangleA);
isIsosceles(triangleB);

// * area - Returns the area of the Triangle
const triangleArea = function (triangle) {
  const result = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
  console.log(`triangle area: ${result}`);
}
triangleArea(triangleA);
triangleArea(triangleB);

// * isObtuse - Returns whether the triangle is obtuse or not
// me: [The triangle is an obtuse triangle if the sum of the squares of the smaller sides is less than the square of the largest side.]
const maxOfTwo = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

const maxOfThree = function (a, b, c) {
  let largest = maxOfTwo(maxOfTwo(a, b), maxOfTwo(b, c));
  return largest;
}
// console.log(maxOfThree(3, 4, 6));

const isObtuse = function (triangle) {
  const largestSide = maxOfThree(triangle.sideA, triangle.sideB, triangle.sideC);
  const values = Object.values(triangle);
  const smallSideArr = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== largestSide) {
      smallSideArr.push(values[i]);
    }
  }
  const sumOfSmallSides = (smallSideArr[0] ** 2) + (smallSideArr[1] ** 2);
  console.log(sumOfSmallSides);
  console.log(largestSide);
  if (sumOfSmallSides < largestSide ** 2) {
    console.log("True");
  }
}
isObtuse(triangleC);
isObtuse(triangleD);
