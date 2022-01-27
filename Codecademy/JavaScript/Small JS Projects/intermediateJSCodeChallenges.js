//* Write a function that will reverse an array without using the .revese method

// Write your code here:
function reverseArray(array) {
  const reversedArray = [];

  for (let i = array.length - 1; i > -1; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}
// When you're ready to test your code, uncomment the below and run:

const sentence = ["sense.", "make", "all", "will", "This"];

console.log(reverseArray(sentence));
// Should print ['This', 'will', 'all', 'make', 'sense.'];

//* Write a function that takes in an array of strings and uses a for loop to print a greeting with each string without using .forEach()
// Write your code here:

function greetAliens(aliens) {
  for (let i = 0; i < aliens.length; i++) {
    console.log(
      "Oh Powerful " +
        aliens[i] +
        ", we humans offer our unconditional surrender!"
    );
  }
}

// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

//* Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.

// Write your code here:
const convertToBaby = (animals) => {
  babyAnimals = [];
  for (i = 0; i < animals.length; i++) {
    babyAnimals[i] = "baby " + animals[i];
  }
  return babyAnimals;
};
// When you're ready to test your code, uncomment the below and run:

const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];

console.log(convertToBaby(animals));
