

console.log(" ");

console.log("🔮 Fortune Teller");
const numberOfChildren = 0;
const partnerName = "Charlotte";
const geographicLocation = "Australia";
const jobTitle = "Rocket Surgeon";

console.log("You will be a " + jobTitle + " in " + geographicLocation +
", and in a relationship with " + partnerName + " with " + numberOfChildren + " kids.")

console.log(" ");

console.log("👴 Age Calculator");
const currentYear = 2021;
const birthYear = 2000;

const ageApprox = currentYear - birthYear;

console.log("They are either " + (ageApprox - 1) + " or " + ageApprox  + ".")
console.log(" ");


console.log("🥐 Lifetime Supply of Pastizzis ");
const currentAge = 29;
const maxAge = 104;
const amountPerDay = 3;

const supplyNeeded = ((maxAge - currentAge) * 365.25) * amountPerDay;

console.log("You will need " + supplyNeeded + " to last you until the ripe old age of " + maxAge + ".")

console.log(" ");

console.log("🧮 Geometrizer");
const radius = 30;

const circumference = (3.141592 ** 2) * radius;
console.log("The circumference is " + Math.round(circumference) + ".")

const area = (3.141592 * (radius ** 2));
console.log("The area is " + Math.round(area) + ".")

console.log(" ");

console.log("🌡  The Temperature Converter");
const tempC = 30;
const cToF = (tempC * 9/5) + 32

console.log( tempC + "°C is " + cToF +"°F.")

const tempF = 120;
const fToC = Math.round((tempF - 32) * 5/9)

console.log( tempF + "°F is " + fToC +"°C.")
console.log(" ");
