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

const rectangleA = {
  length: 4,
  width: 4
};

const rectangleB = {
  length: 10,
  width: 4
};
const isSquare = function (shape) {
  if (shape.length === shape.width)  {
    return "Shape is a square";
  } else {
    return "Shape is a rectangle";
  }
}
console.log(isSquare(rectangleA));
console.log(isSquare(rectangleB));

const area = function (shape) {
  const calcArea = shape.length * shape.width
  return calcArea;
}
console.log(area(rectangleA)+ " squared cm");
console.log(area(rectangleB)+ " squared cm");

const perimeter = function (shape) {
  const calcPerimeter = 2* (shape.length + shape.width);
  return calcPerimeter;
}
console.log(perimeter(rectangleA) + "cm");
console.log(perimeter(rectangleB) + "cm");

// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const triangleB = {
  sideA: 5,
  sideB: 9,
  sideC: 12,
};

const triangleC = {
  sideA: 5,
  sideB: 5,
  sideC: 5,
};
//what triangle?
const isEquilateral = function (shape) {
  if (shape.sideA === shape.sideB && shape.sideB === shape.sideC)  {
    return "Shape is an equilateral triangle";
  } else {
  return false;
}
};

  const isIsosceles = function (shape) {
    if (shape.sideA === shape.sideB || shape.sideB === shape.sideC || shape.sideA === shape.sideC) {
    return "Shape is an isosceles triangle";
  } else {
  return false;
}
};


const isObtuse = function(shape){
  if(shape.sideA !== shape.sideB && shape.sideA !== shape.sideC){
    return "Shape is an obtuse triangle";
  }else {
    return false;
  }
};
console.log(isIsosceles(triangleA));
console.log(isEquilateral(triangleA));
console.log(isEquilateral(triangleC));
console.log(isObtuse(triangleB));
// triangle area = Heron's formula
const triangleArea = function (shape) {
  let s = ( shape.sideA + shape.sideB + shape.sideC )/2
    const calcArea = Math.sqrt(s * (s - shape.sideA) * (s - shape.sideB) * (s - shape.sideC));
    return calcArea;
  }
  console.log(triangleArea(triangleA)+ " squared cm");
  console.log(triangleArea(triangleB)+ " squared cm");

  // # The Cash Register
  //
  // Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.

  const cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };


const cashRegister = function(cartForParty){
  let total = 0;
  let items = Object.values(cartForParty).map((i) => Number(i));
for (i = 0; i < items.length; i++){
     total = total + items[i];
}
      return total;
    };
  console.log("Your total is $" + cashRegister(cartForParty));


  // # Credit Card Validation
  //
  // You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
  //
  // Here are the rules for a valid number:
  //
  // - Number must be 16 digits, all of them must be numbers
  // - You must have at least two different digits represented (all of the digits cannot be the same)
  // - The final digit must be even
  // - The sum of all the digits must be greater than 16
// const validateCreditCard = function (creditCard) {
//   //must be 16 digits
//   if (creditCard.length !== 16){
//     return false;
//   }
//    //must be all numbers
//   for (let i=0; i < creditCard.length; i++) {
//     let currentNumber = creditCard[i];
//     currentNumber = Number.parseInt(currentNumber);
//     if(!Number.isInteger(currentNumber)){
//     return false;
//   }
//   // all digits cannot be the same
//   let num = [];
//    for (let i=0; i < creditCard.length; i++) {
//      num[creditCard[i]] = true;
//   }
//   if(Object.keys(num).length < 2){
//      return false;
//    }
//    // last digit is even
//   if (creditCard[creditCard.length -1] % 2 !==0){ // last digit is even
//     return false;
//   }
//   // sum is greater than 16
//   let sum = null;
//     for (let i=0; i<creditCard.length; i++) {
//       sum = sum + creditCard[i];
//   }if (sum <= 16) {
//     return false;
//   } else {
//   return true;
// }
// }
// };



// # JavaScript Bank
//
// In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write.
//
// #### Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// #### Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
