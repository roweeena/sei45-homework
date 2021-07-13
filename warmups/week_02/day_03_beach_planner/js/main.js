// // # Beach Planner
// // Write a program that, given a minimum temperature and a maximum rainfall forecast, output a list of day you can go to the beach.
// // ## example:
// // with the following forecast:
// // ```javascript
// // monday: the temperature is 20 and there is 12mm of rain
// // tuesday: the temperature is 25 and there is 6mm of rain
// // wednesday: the temperature is 27 and there is 24mm of rain
// // thursday: the temperature is 32 and there is 65mm of rain
// // friday: the temperature is 18 and there is 2mm of rain
// // saturday: the temperature is 26 and there is 0mm of rain
// // sunday: the temperature is 27 and there is 14mm of rain
// // ```
// // If i'm ok to go to the beach with a temperature at least 24 degrees and no more than 8mm of rain, the output of the program
// // should be : Tuesday and Saturday
// // ### Hint:
// // - Wisely choose a way to store you data (array, object,...)

// console.log('B E A C H');

// const forecast = [
//   {
//     day: 'monday',
//     temp: 20,
//     rain: 12
//   },
//   {
//     day: 'tuesday',
//     temp: 25,
//     rain: 6
//   },
//   {
//     day: 'wednesday',
//     temp: 27,
//     rain: 24
//   },
//   {
//     day: 'thursday',
//     temp: 32,
//     rain: 65
//   },
//   {
//     day: 'friday',
//     temp: 18,
//     rain: 2
//   },
//   {
//     day: 'saturday',
//     temp: 26,
//     rain: 0
//   },
//   {
//     day: 'sunday',
//     temp: 27,
//     rain: 14
//   }
// ];

// // write a function 
// const beachPlanner = function (preferTemp, preferRain, weatherForecast) {
//   let beachDays = [];

//   // loop through the forecast array: if the temp is > than preferTemp and the rain < preferRain
//   weatherForecast.forEach((dayObj) => {
//     if (dayObj.temp >= preferTemp && dayObj.rain <= preferRain) {
//       beachDays.push(dayObj.day);
//     }
//   })

//   return beachDays.join(', ');
// }

// // If i'm ok to go to the beach with a temperature at least 24 degrees and no more than 8mm of rain, the output of the program
// // should be : Tuesday and Saturday

// console.log(beachPlanner(24, 8, forecast));
// // console.log(beachPlanner(20, 15, forecast));


const forecast = {
  monday: [20, 12],
  tuesday: [25, 6],
  wednesday: [27, 24],
  thursday: [32, 65],
  friday: [18, 2],
  saturday: [26, 0],
  sunday: [27, 14]
}

const beachPlanner = function (minTemp, maxRain, forecast) {
  let beachDays = [];

  let daysArray = Object.keys(forecast); // get the keys array

  console.log(daysArray); // ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

  for (let i = 0; i < daysArray.length; i++) {
    let day = daysArray[i];
    console.log(day); // print out each day

    let temp = forecast[day][0]; // accessing the first item in the value array of the `forecast` object that has the key of that day
    let rain = forecast[day][1]; // accessing the second item in the value array of the `forecast` object that has the key of that day

    // check the conditions
    if (temp >= minTemp && rain <= maxRain) {
      beachDays.push(day);
    }
  }

  console.log(beachDays);
  return beachDays;
}

console.log(beachPlanner(24, 8, forecast));
  