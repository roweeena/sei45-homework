/*
## Objectives:
* Apply your knowledge of Javascript to solve a real world problem.
* Get really good at array manipulation.

#### Activity
* Create a program that models a simple subway system.

* The program takes the line and stop that a user is getting on at and the line
and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

```javascript
planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
```

* There are 3 subway lines:
  * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
  * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
  * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
  * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
* Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


#### Hints:
* Work out how you would do it on paper first! Then start to explain that process in Javascript.
* Get the program to work for a single line before trying to tackle multiple lines.
* Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
* Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
* The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
* Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
*/

// Only intersection is 'Union Square'
const lines = {
  6: ['Grand Central','33rd','28th','23rd','Union Square','Astor Place'],
  N: ['Time Square','34th','28th','23rd','Union Square'],
  L: ['8th','6th','Union Square','3rd','1st']
};

// b = begin : e = end;
// L = line  : S = stop;
const tripPlan =function ( bStop, bLine, eStop, eLine){
  this.bS = bStop;
  this.bL = bLine;
  this.eS = eStop;
  this.eL = eLine;
};


// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."


// Extract stops along a line
const getStops = function (line, idxA, idxB){
  return line.slice(idxA, idxB);
};

const planTrip = function (oTrip, oLines){

  let numStops = 0;
  let stopsOnDWay = []; // the station to pass along the way to destination


  // Get all indexes on each line
  const idxBegin  = oLines[oTrip.bL].indexOf(oTrip.bS);
  const idxBegUSq = oLines[oTrip.bL].indexOf('Union Square');

  const idxEnd    = oLines[oTrip.eL].indexOf(oTrip.eS);
  const idxEndUSq = oLines[oTrip.eL].indexOf('Union Square');
  // const idxEndUSq = oLines[oTrip.bL].indexOf(uSquare,idxEnd); // need to figure out how fromIndex works

  if (oTrip.bL === oTrip.eL) {
    // same line trip

    stopsOnDWay = getStops(oLines[oTrip.bL], idxBegin, idxEnd + 1);
    wholeTrip.totalStops = stopsOnDWay.length;

    if(idxEnd > idxBegin){
      // stopsOnDWay = oLines[oTrip.bL].slice(idxBegin, idxEnd + 1);
      // stopsOnDWay = getStops(oLines[oTrip.bL], idxBegin, idxEnd + 1);
      wholeTrip.stops.push(stopsOnDWay);
      return wholeTrip;
    } else {
      // stopsOnDWay = oLines[oTrip.bL].slice(idxBegin, idxEnd + 1).reverse();
      wholeTrip.stops.push(stopsOnDWay.reverse());
      return wholeTrip;
    }
  } else { // Multiple line trips
    // Begin line stops along the way
   stopsOnDWay = oLines[oTrip.bL].slice(idxBegin, idxBegUSq + 1);
   numStops    = stopsOnDWay.length;
   if (idxBegUSq < idxBegin) {
      wholeTrip = stopsOnDWay.reverse();
   }
   console.log(`You must travel through the following stops on the ${ oTrip.bL } line: ${ stopsOnDWay.join(', ')}.`);
   console.log('Change at Union Square');

   // End Line stops along the way after USq
   stopsOnDWay = oLines[oTrip.eL].slice(idxEndUSq + 1, idxEnd + 1);
   if (idxEndUSq > idxEnd) {
       stopsOnDWay = oLines[oTrip.eL].slice(idxEnd, idxEndUSq).reverse();
    }
    numStops    += stopsOnDWay.length;
    console.log('Your journey continues through the following stops: ' + stopsOnDWay.join(', '));
    console.log(`${numStops} stops in total.`);
  }
};



const tripA = new tripPlan('23rd','N','33rd','6');
const routeA = new planTrip(tripA,lines);
