let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

secretMessage.pop();
//console.log(secretMessage);
//Javascript expected to be removed

//console.log(secretMessage.length);
//24 expected to be returned

secretMessage.push("to", "program");
//console.log(secretMessage);
//easily and right expected to be appended to end of array

const easily = secretMessage.indexOf("easily");

secretMessage[easily] = "right";
//replace 'easily' -> 'right'

//console.log(secretMessage);

secretMessage.shift();
//console.log(secretMessage);
//first item expected to be removed

secretMessage.unshift("Programming");
//console.log(secretMessage);
//Programming expected at beginning of array

secretMessage.splice(6, 11, "know");
console.log(secretMessage);

console.log(secretMessage.join());
