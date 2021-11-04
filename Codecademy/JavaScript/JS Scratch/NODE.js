//declare what you want to translate
let input = "I'm stinky!".toLowerCase();
//declare a "vowels" array where we'll put our vowels
const vowels = ["a", "e", "i", "o", "u"];
//create resultArray to store vowels from input
let resultArray = [];
//first loop iterates through input
for (let i = 0; i < input.length; i++) {
  //debug console.log(input[i]);

  //second loop iterates through vowels while iterating through input
  for (let e = 0; e < vowels.length; e++) {
    // console.log(vowels[e]);
    //if the current input equals the current vowels
    if (input[i] === vowels[e]) {
      //push to resultArray
      resultArray.push(vowels[e]);
    }
  }
}
//log that shit, i, i expected
console.log(resultArray);
