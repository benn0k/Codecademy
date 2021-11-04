//declare what you want to translate
let input = "I'm stinky!";
//declare a "vowels" array where we'll put our vowels
const vowels = ["a", "e", "i", "o", "u"];
//create resultArray to store vowels from input
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  //debug console.log(i);
  for (let e = 0; e < vowels.length; e++) {
    //debug console.log(e);
    if (input[i] === vowels[e]) {
      resultArray.push(vowels[e]);
    }
  }
}

console.log(resultArray);
