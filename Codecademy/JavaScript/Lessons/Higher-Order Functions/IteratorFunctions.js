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

console.log(smallNumbers); // Returns 10, 20, 30, 40, 50

//! .filter() returns a array of elements after filtering out elements from an array

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];
// words.filter takes in 'words' elements, anything less than 6 is returned to shortwords
const shortWords = words.filter((word) => {
  return word.length < 6;
});

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

const smallNumbers = randomNumbers.filter((number) => {
  return number < 250;
});

const favoriteWords = [
  'nostalgia',
  'hyperbole',
  'fervent',
  'esoteric',
  'serene',
];
// filter favoriteWords array so that only words greater than 7 are returned
const longFavoriteWords = favoriteWords.filter((word) => {
  return word.length > 7;
});

//! findIndex() will return the location of an element in an array that evaluates to true

const jumbledNums = [123, 25, 78, 5, 9];

const lessThanTen = jumbledNums.findIndex((num) => {
  return num < 10;
});

const animals = [
  'hippo',
  'tiger',
  'lion',
  'seal',
  'cheetah',
  'monkey',
  'salamander',
  'elephant',
];

const foundAnimal = animals.findIndex((animal) => {
  return animal === 'elephant';
});

const startsWithS = animals.findIndex((animal) => {
  if animal.charAt) === 's' {
    return animal;
  }
})
