// # Geometry Function Lab
// ### Part 1, Rectangle
const rectangleA = {
  length: 4,
  width: 4
};
const rectangleB = {
  length: 5,
  width: 4
};


// * isSquare - Returns whether the rectangle is a square or not
console.log("1️⃣ Part 1, Rectangle");
console.log("");
const isSquare = function(rectangle){
  const l = rectangle.length;
  const w = rectangle.width;
  if (l === w ) return true;
  else return false;
}

console.log(isSquare(rectangleA));
console.log(isSquare(rectangleB));
console.log("");


// * area - Returns the area of the rectangle
const area = function(rectangle){
  const l = rectangle.length;
  const w = rectangle.width;
  return (l * w);
}

console.log(area(rectangleA));
console.log(area(rectangleB));
console.log("");


// * perimeter - Returns the perimeter of the rectangle
const perimeter = function(rectangle){
  const l = rectangle.length;
  const w = rectangle.width;
  return ((l + w) * 2);
}

console.log(perimeter(rectangleA));
console.log(perimeter(rectangleB));
console.log("");



// ### Part 2, Triangle
console.log("📐 Part 2, Triangles");
console.log("");
const triangleA = {
  sideA: 4,
  sideB: 4,
  sideC: 3
};

const triangleB = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};

const triangleC = {
  sideA: 4,
  sideB: 5,
  sideC: 6
};

// * isEquilateral -
const isEquilateral = function(tri){
  const sides = [tri.sideA, tri.sideB, tri.sideC]
  if(sides[0] === sides[1] && sides[1] === sides[2]){
    return true;}
  else return false;
};
console.log(isEquilateral(triangleA));
console.log(isEquilateral(triangleB));
console.log("");


// * isIsosceles -
const isIsosceles = function(tri){
  const sides = [tri.sideA, tri.sideB, tri.sideC];
  if (isEquilateral(tri)) return false;
  else if(sides[0] === sides[1] || sides[0] === sides[2] || sides[1] == sides[2]) return true;
  else return false;
}
console.log(isIsosceles(triangleA));
console.log(isIsosceles(triangleB));
console.log("");


// * area - Returns the area of the Triangle
const triArea = function(tri){
  return tri.sideA + tri.sideB + tri.sideC;
}
console.log(triArea(triangleA));
console.log(triArea(triangleB));
console.log("");


// * isObtuse - Returns whether the triangle is obtuse or not
const isObtuse = function(tri){
  if (isEquilateral(tri)) return false;
  else if (isIsosceles(tri)) return false;
  else return true;
}

console.log(isObtuse(triangleA));
console.log(isObtuse(triangleC));
console.log("");





// # The Cash Register
console.log("💰 Part 3, Cash register");

const cart = {
  banana: 1.25,
  handkerchief: 0.99,
  Tshirt: 25.01,
  apple: 0.60,
  nalgene: 10.34,
  proteinShake: 22.36
};

const cashRegister = function(cart){
  let thatComesTo = 0;
    for (let key in cart) { // don't really get this
      thatComesTo += cart[key];
      console.log(".. beep")
    }
    return `$` + thatComesTo;
}
console.log(cashRegister(cart));




// # Credit Card Validation
console.log("");
console.log("💳 Part 4, Credit card");

// - `9999-9999-8888-0000`
// // - `6666-6666-6666-1666`
// //
// // The following credit card numbers are invalid:
// //
// // - `a923-3211-9c01-1112` invalid characters
// // - `4444-4444-4444-4444` only one type of number
// // - `1111-1111-1111-1110` sum less than 16
// // - `6666-6666-6666-6661` odd final number


const errors = [
  "Invalid input",
  "Number must be 16 digits",
  "All digits must be numbers",
  "You must have at least two different digits represented (all of the digits cannot be the same)",
  "The final digit must be even",
  "The sum of all the digits must be greater than 16"
]

const error = function(num){
  console.log( `🚨 Error ${num}: ${errors[num]}`);
  return false;
}

// -------------------------------------------
// Sub functions (is that a term?)
  // function to test if everything in an array is equal
    // https://dev.to/rajnishkatharotiya/function-to-check-if-all-records-are-equal-in-array-javascript-3mo3
const allEqual = arr => arr.every( v => v === arr[0] )

const wrongLength = function(int){
  if( int.length != 16 ) return true;
  else return false
}

const notNumber = function(int){
  if(int !== int) return true;
  else return false
}

const notEven = function(int){
  if (int%2 != 0 ) return true;
  else return false
}

const sumOfArray = function(arr){
  let total = 0;
  for(let i in arr) {
    int = Number(arr[i])
    total = (int + total);
  }
  return total;
}


// -------------------------------------------
// Function
const validateCreditCard = function(cardNum){
  const str = cardNum.replaceAll('-','');
  const int = Number(str);
  const arr = Array.from(String(int));

  if (wrongLength(str)) return error(1);
  if (notNumber(int)) return error(2);
  if (allEqual(arr)) return error(3);
  if (notEven(arr[15])) return error(4);
  if (sumOfArray(arr) <= 16) return error(5);

  return true;
}


// Cards to validate
console.log("✅ Valid 1:");
console.log(validateCreditCard(`9999-9999-8888-0000`));
console.log("");
console.log("✅ Valid 2:");
console.log(validateCreditCard(`6666-6666-6666-1666`));
console.log("");
console.log("❌ not enough numbers");
console.log(validateCreditCard(`6666-6666-666-6661`));
console.log("");
console.log("❌ invalid characters");
console.log(validateCreditCard(`a923-3211-9c01-1112`));
console.log("");
console.log("❌ only one type of number");
console.log(validateCreditCard(`4444-4444-4444-4444`));
console.log("");
console.log("❌ sum less than 16");
console.log(validateCreditCard(`1111-1111-1111-1110`));
console.log("");
console.log("❌ odd final number");
console.log(validateCreditCard(`6666-6666-6666-6661`));
console.log("");




// // # JavaScript Bank
// //
// // In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write.
// //


// // #### Bank
// //
// // There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.


let bank = {
  ac1{
    name: "Jess McDonald",
    balance: 5000,
  }
  ac2{
    name: "Kobe Smith",
    balance: 30000,
  }
  ac3{
    name: "Xiavier Moneyton",
    balance: 30000000,
  }
};




// //
// // The bank has many accounts. Accounts should be objects that all share a set of common functionality.
// //
// // #### Accounts
// //
// // Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
// //
// // There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working.
// //
// // You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
// //
// // ### Tips
// //
// // Don't overthink this. Shorter code is probably the answer.
// //
// // ## Bonus
// //
// // - Ensure that the accounts cannot have negative values.
// // - Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// //
// // ## Additional
// //
// // Begin exploring the [JavaScript Koans](https://github.com/liammclennan/JavaScript-Koans). Fork, clone and start trying them.
