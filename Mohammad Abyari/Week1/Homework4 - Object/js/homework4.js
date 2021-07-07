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
    length: 7,
    width: 3
};

const rectangleC = {
      length: 2,
      width: 4
};


const isSquare = function (recTang){
  if (recTang.length === recTang.width){
      return `Is a square`;
  }else if (recTang.length !== recTang.width){
      return `Is a rectangle`;
  }
}

const erea = function (recTangArea){
  const result = recTangArea.length * recTangArea.width;
  return `${result} is the erea of the rectangle`;
}

const perimeter = function (recTangPer){
  perimeterRec = (recTangPer.length + recTangPer.width) * 2 ;
  return `The perimeter of this rectangle is ${perimeterRec}`;
}

/*///////////Rectangle A//////////*/
console.log(isSquare(rectangleA));
console.log(erea(rectangleA));
console.log(perimeter(rectangleA));

/*///////////Rectangle B//////////*/
console.log(isSquare(rectangleB));
console.log(erea(rectangleB));
console.log(perimeter(rectangleB));

/*///////////Rectangle C//////////*/
console.log(isSquare(rectangleC));
console.log(erea(rectangleC));
console.log(perimeter(rectangleC));




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

// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// const triangleB = {
//   sideA: 3,
//   sideB: 3,
//   sideC: 3
// };
// const triangleC = {
//   sideA: 2,
//   sideB: 21,
//   sideC: 9
// };


/* /////////////////////////////ANSWER///////////////////////////////////// */


//
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
const triangleB = {
  sideA: 3,
  sideB: 3,
  sideC: 3
};
const triangleC = {
  sideA: 2,
  sideB: 21,
  sideC: 9
};


const isEquilateral = function (triAn){
  if(triAn.sideA ===triAn.sideB && triAn.sideB === triAn.sideC){
  console.log(`This is a equilateral`);
  }else{console.log(`This rectangle is not a equilateral`);
  }
}

isEquilateral(triangleA);
isEquilateral(triangleB);
isEquilateral(triangleC);
