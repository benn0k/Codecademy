//declare what you want to translate
let input = "turpentine and turtles".toLowerCase();
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

  // loop that checks if "e" is input, doubles letter
  if (input[i] === "e") {
    resultArray.push("e");
  } else if (input[i] === "u") {
    resultArray.push("u");
  }
}
//log that shit
console.log(resultArray.join("").toUpperCase());
