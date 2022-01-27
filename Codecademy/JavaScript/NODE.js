//* Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.

// Write your code here:
const convertToBaby = (animals) => {
  babyAnimals = [];
  for (i = 0; i < animals.length; i++) {
    babyAnimals[i] = 'baby ' + animals[i];
  }
  return babyAnimals;
};
// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals));
