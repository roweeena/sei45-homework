

// Functions

// 🔮
const tellFortune = function(kidsNo, partner, loc, job, number){
  const fortune = `Fortune ${number}: You will be a ${job} in  ${loc}, and married to ${partner} with ${kidsNo} kids.`;
  console.log(fortune);
}
const fourFortunes = function(){
    console.log("🔮 Fortune Teller");
    tellFortune(1, "Joe", "a place", "Rocket Surgeon", 1);
    tellFortune(0, "Xiather", "between two plants", "Missile Doctor", 2);
    tellFortune(2, "Jess", "an office", "Sports Lawer", 3);
    tellFortune(48, "Rin", "here", "Proffesional Practitioner", 4);
    return "";
}


// 🐶
const calculateDogAge = function(ageInYears, rate, number){
  const result = `Doggie #${number} is ${ageInYears * rate} years old in dog years!`
  console.log(result);
}
const fourDogAges = function(){
  console.log("🐶 Dog Ages");
  calculateDogAge(20, 7, 1);
  calculateDogAge(2, 2, 2);
  calculateDogAge(40, 1, 3);
  calculateDogAge(250, 300, 4);
  return "";
}


// 🌭
const calculateSupply = function(age, amountPerDay){
  const yearsLeft = 104 - age; //104 = max age
  const amountPerYear = (amountPerDay * 365.25);
  const lifetimeAmountConsumed = Math.round(yearsLeft * amountPerYear);

  console.log(`You will need ${lifetimeAmountConsumed} to last you until the ripe old age of 104`)
}
const fourSupplys = function(){
  console.log("🌭 Snack Supply");
  calculateSupply(5, 7);
  calculateSupply(103, 2);
  calculateSupply(42, 1);
  calculateSupply(8, 3400);
  return "";
}


// 📐
const calcCircumference = function(radius){
  const circumference = (2 * radius * 3.141592);
  console.log(`The circumference is ${Math.round(circumference)}`);
}
const fourCircles = function(){
  console.log("📐 Geometrizer");
  calcCircumference(5);
  calcCircumference(103);
  calcCircumference(42);
  calcCircumference(8);
  return "";
}


// 🌡
const celsiusToFahrenheit = function(celc){
  const tempC = celc;
  const cToF = Math.round((tempC * 9/5) + 32)

  console.log( `${tempC}°C is ${cToF}°F.`)
}
const fourTemps = function(){
  console.log("🌡  Temperature Converter");
  celsiusToFahrenheit(5);
  celsiusToFahrenheit(103);
  celsiusToFahrenheit(42);
  celsiusToFahrenheit(8);
  return "";
}




// ---------------------------
//
// 🎬  script
//
console.log(" ");
console.log(fourFortunes());
console.log(fourDogAges());
console.log(fourSupplys());
console.log(fourCircles());
console.log(fourTemps());
//
//
// ---------------------------
