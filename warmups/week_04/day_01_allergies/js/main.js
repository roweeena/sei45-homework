// # Allergies Warmup
// An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).
// The list of items (and their value) that were tested are:
// - eggs (1)
// - peanuts (2)
// - shellfish (4)
// - strawberries (8)
// - tomatoes (16)
// - chocolate (32)
// - pollen (64)
// - cats (128)
// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.
// Now, given just that score of 34, your program should be able to say:
// - Whether Tom is allergic to any one of those allergens listed above.
// - All the allergens Tom is allergic to.
// ```
// scorecard:
  // 1: "eggs",
  // 2: "peanuts",
  // 4: "shellfish",
  // 8: "strawberries",
  // 16: "tomatoes",
  // 32: "chocolate",
  // 64: "pollen",
  // 128: "cats"
// ```

// find a way to store the scorecard: object



const allergyScore = function(num) {
  const scorecard = {
    1: "eggs",
    2: "peanuts",
    4: "shellfish",
    8: "strawberries",
    16: "tomatoes",
    32: "chocolate",
    64: "pollen",
    128: "cats"
  }

  const allergies = [];

  const scores = Object.keys(scorecard);
  // console.log(scores); // array of keys

  if (num === 0) {
    return 'Good news! No allergies';
  } else {
    // loop through the scores and check if the number is greater than the score => subtract the num
    for (let i = scores.length - 1; i >= 0; i--) {
      let score = scores[i];
      if (num >= score) {
        // console.log('num', num);
        // console.log('score', score);
        // console.log('allergy', scorecard[score]);
        allergies.push(scorecard[score]);
        num -= scores[i];
      }
    }
  }
  return `Here is the list of allergies: ${allergies.join(', ')}`;
}

console.log(allergyScore(12));
console.log(allergyScore(34));
console.log(allergyScore(17));

