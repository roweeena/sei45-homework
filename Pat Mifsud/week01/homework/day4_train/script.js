

// MTA Lab
// 🚨 as an added challange i tried to also calculate price for the trip, with a different price per line, and display the platform for each station. I regret doing that.


// ------------------------------------
// Initalising things

// Array to log the trip for latter reporting
let log = [];

// Counter
let stopsMade = 0;


// ------------------------------------
// Stations, stops and lines
const subway = {
//    name           platform#
  lineN : {
    stop : [
      [ "Times Square" , 4 ],
      [ "34th Street" , 1 ],
      [ "28th Street" , 1 ],
      [ "23rd Street" , 1 ],
      [ "Union Square" , 9 ],
      [ "8th Street" , 1 ]
    ],
    price : 1.25,
    direction: "north"
  },
  lineL : {
    stop : [
      [ "8th Street" , 2 ],
      [ "6th Street" , 1 ],
      [ "Union Square" , 8 ],
      [ "3rd Street" , 1 ],
      [ "1st Street" , 1 ]
    ],
    price : 0.50,
    direction: "east"
  },
  line6 : {
    stop : [
      [ "Grand Central" , 26 ],
      [ "33rd Street" , 1 ],
      [ "28th Street" , 2 ],
      [ "23rd Street" , 2 ],
      [ "Union Square" , 7 ],
      [ "Astor Place" , 1 ]
    ],
    price : 3.10,
    direction: "west"
  },
};


// --------------------------
// 🏭  Factories


const formatStops = function(lineStops){
  let formattedArray = [];
  for (let i = 0; i < lineStops.length; i++){
    formattedArray.push({
      name: lineStops[i][0],
      platform: lineStops[i][1]
    });
  };
return formattedArray;
}


const formatSubwayObj = function(){
  for (Object in subway){
    const line = subway[Object];
    line.stop = formatStops(line.stop);
  };
};


// --------------------------
// ⚙️  Misc Functions

// Since i added platforms and cost, I couldn't use an array
// chose to make a funciton to find index in an object
const findIndex = function(arr, string){
    for(let i=0; i < arr.length; i++){
      if(arr[i].name == string) return i;
    }
};


// if heading in the opposite direction
const reverseIndex = function(i, arr){
  return arr.length - i - 1;
}

const reverseDirection = function(dir){
  if (dir === "north") return "south";
  if (dir === "east") return "west";
  if (dir === "south") return "north";
  if (dir === "west") return "east";
  return
}

const msglogHeader = function(st1, st2){
  const msg = `\n\n--------------------\n\nℹ️\n\nHere's your trip from from ${st1} to ${st2}:`
  log.push(msg);
}

const msglogFooter = function(){
  let total = 0
  for(i in arguments) {
        total += arguments[i];
  }
  log.push(`\nTotal cost comes to $${total}.\n${stopsMade} stops.\nHave a great trip\n\n--------------------\n\n`)
}

const sendLogToConsole = function(){
  console.log("");
  console.log(log.join('\n \n'));
  log = [];
}

// --------------------------
// Main function



const travel = function(station1, line1, station2, line2="",){
  msglogHeader(station1, station2);
  stopsMade = 0;

  if (line1 === line2){
    mapLineRoute(station1, station2, line1);
    msglogFooter(subway[line1].price);

  } else {
    mapLineRoute(station1, "Union Square", line1);
    mapLineRoute("Union Square", station2, line2);
    msglogFooter(subway[line1].price, subway[line2].price);
  }
  sendLogToConsole();
};


const mapLineRoute = function(station1, station2, line){
    let route = []
    const listOfStops = [...subway[line].stop];
    let direction = `${subway[line].direction}`;

    let s1Index = findIndex(listOfStops, station1);
    let s2Index = findIndex(listOfStops, station2);

    if (s1Index > s2Index){
      listOfStops.reverse();
      direction = reverseDirection(direction);
      s1Index = reverseIndex(s1Index, listOfStops);
      s2Index = reverseIndex(s2Index, listOfStops);
    }

    route = listOfStops.slice(s1Index, s2Index + 1)
    ride(route, direction);
};


const ride = function(route, direction){
  const length = route.length;
  boardAt(route[0], direction);
  if(length > 2){
    passBy(route.slice(1, length -1));
  }
  disembark( route[length - 1]);
};


const boardAt = function(stop, direction){
  stopsMade++;
  log.push(`Board the train at ${stop.name}, Platform ${stop.platform}, heading ${direction}.`)
};


const passBy = function(passArr){
  let string = `Pass `;
  for (let i = 0; i < passArr.length; i++){
    stopsMade++;
    const seperator = `${i < (passArr.length - 1) ? ", " : ". "}`
    string += `${passArr[i].name}${seperator}`
  };
  log.push(string);
};

const disembark = function(stop){
  stopsMade++;
  log.push(`Disembark at ${stop.name}, Platform ${stop.platform}.`)
};



// Run
console.log("");
console.log("travel(station1, line, station2, line)");
console.log(subway);

// turn array of stops and platforms into a formatted obj
formatSubwayObj();

// Line N heading north
travel("Union Square", "lineN", "Times Square", "lineN");
// Line N heading sourth
travel("Times Square", "lineN", "8th Street", "lineN");

// Line N - line 6
travel("Times Square", "lineN", "28th Street", "line6");

// Line 6 - Line L
travel("Astor Place", "line6", "6th Street", "lineL");

      //   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
      //   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
      //   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
      //   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)










// # MTA Lab
//
// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.
//
// #### Activity
// * Create a program that models a simple subway system.
//
// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```
//
// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
//
//
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
