
// Calculator
// PART 1

const round2 = function(input){
  return Math.round(input * 100) / 100;
} //I wanted to round numbers to 2 decimal places at most, so made it a funciton

const squareNumber = function(num, log){
  const result = Math.pow(num, 2);
  const statement =
    `The result of squaring the number ${num} is ${round2(result)}.`
  if (log){
    console.log(statement);};
  return(result);
}

const halfNumber = function(num){
  const result = num / 2;
  const statement = `The result of halving the number ${num} is ${round2(result)}.`;
  console.log(statement);
  return(result);
}

const percentOf = function(num1, num2){
  const result = (num1 / num2) * 100;
  const statement = `${num1} is ${round2(result)}% of ${num2}.`
  console.log(statement);
  return(result);
}

const areaOfCircle = function(radius){
  const result = squareNumber(Math.PI * radius, false);
  const statement =
    `The area for a circle with radius ${radius} is ${round2(result)}.`
  console.log(statement);
  return(result);

}

// PART 2

const partTwoFunction = function(num=42){
  const half = halfNumber(num);
  const squa = squareNumber(half);
  const circ = areaOfCircle(squa);
  const perc = percentOf(circ, squa);
  const result = round2(perc);
  const statement = `The half/squared/ared/percented result is ${result}`;
  console.log(statement);
  return(round2(result));
}

// Part 1 print

console.log("");
console.log("📚 PART 1");
squareNumber(44, true);
halfNumber(3244);
percentOf(40, 200);
areaOfCircle(342);
console.log("");

console.log(`📚 PART 2`);
partTwoFunction();
console.log("");



// Strings
//
const drEvil = function(amount){
  let pinky = "."
  if (amount === 1000000){
    pinky = "(pinky)."}
  const statement = `💵 $${amount}${pinky}`;
  console.log(statement);
  return (statement);
}

console.log("👨🏻‍🦲 Dr Evil");
drEvil(1000000);
drEvil(3214);
console.log("");

//
const mixUp = function(one, two){
  const t = two.charAt(0);
  const o = one.charAt(0);
  const tne = t + one.substring(1);
  const owo = o + two.substring(1);
  const result = tne + " " + owo;
  console.log(result);
}

console.log("🔀 Mixup");
mixUp("hello", "goodbye");
mixUp("pat", "mifsud");
console.log("");


//
const fixStart = function(word){
  const firstLetter = word.charAt(0);
  const restOfWord = word.substring(1);
  const regex = new RegExp(firstLetter, "gi")
  const newRestOfWord = restOfWord.replace(regex, "*");
  const result = firstLetter + newRestOfWord;
  console.log(result);
}

console.log("🤐 fixStart");
fixStart("anaconda");
fixStart("teritory");
console.log("");


//
const cutWordPreIng = function(word){
  const countToIng = word.length - 3;
  const leftOfIng = word.substring(0, countToIng);
  return leftOfIng;
}

const verbing = function(word){
    if( word.length < 3 ){
        return word;
    } else if( word.slice(-3) === "ing"){
        result = cutWordPreIng(word);
        return result + "ly";
    } else {
        return word + "ing";
    }
}

console.log("💬 Verbing");
console.log(verbing("swim"));
console.log(verbing("swiming"));
console.log(verbing("go"));
console.log("");

//


const chopUpNotBad = function(string, badLocation, notLocation){
      const badReverseIndex = (badLocation - string.length + 3);
      const firstHalf = string.substring(0, notLocation);
      const end = string.slice(badReverseIndex);
      return firstHalf + `good` + end;
}


const notBad = function(string){
  const notLocation = string.indexOf("not");
  const badLocation = string.indexOf("bad");

  if (notLocation == -1){ //not there
    return string } else if
  (badLocation == -1){
    return string } else {
      return chopUpNotBad(string, badLocation, notLocation);
    }
}

console.log("🤷‍♂️ Not Bad");
console.log(notBad('This dinner is not that bad!'));
console.log(notBad('I think the movie was not that bad, honestly'));
console.log("");
