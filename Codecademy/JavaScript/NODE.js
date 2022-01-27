//* Write a function shoutGreetings() that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end

// Write your code here:

const shoutGreetings = (arr) => {
  mutatedGreeting = [];
  arr.forEach((greetings) => {
    mutatedGreeting.push(greetings.toUpperCase() + `!`);
  });
  return mutatedGreeting;
};

// Feel free to uncomment out the code below to test your function!
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings));
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
