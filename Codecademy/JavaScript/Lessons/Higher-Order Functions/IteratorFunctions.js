//! .forEach() will execute the same code for each element in an array
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function (fruitItem) {
  console.log(`I want to eat a ` + fruitItem);
});

//*fruits.forEach() calls the forEach method on the Fruits array
//*forEach() takes an argument of callback function
//*forEach() loops

//! .map() will take a callback function and return a new array

const numbers = [1, 2, 3, 4, 5];

const bigNumbers = numbers.map((number) => {
  return number * 10;
}); // expected, [10, 20, 30, 40, 50]

const animals = [
  'Hen',
  'elephant',
  'llama',
  'leopard',
  'ostrich',
  'Whale',
  'octopus',
  'rabbit',
  'lion',
  'dog',
];

const secretMessage = animals.map((animal) => animal[0]);

//OR

const secretMessage = [
  'Hen',
  'elephant',
  'llama',
  'leopard',
  'ostrich',
  'Whale',
  'octopus',
  'rabbit',
  'lion',
  'dog',
].map((animal) => {
  return animal[0];
});

// Create the secretMessage array below

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below

const smallNumbers = bigNumbers.map((number) => number / 100);

console.log(smallNumbers);
