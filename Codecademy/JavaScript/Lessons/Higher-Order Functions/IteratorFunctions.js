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

//! .findIndex () will find the location of an element in an array.
//numbers
const jumbledNums = [123, 25, 78, 5, 9];
// new variable that stores returned index from invoking .findIndex
//each element in the jumbledNums array will be passed to this function as an element

const lessThanTen = jumbledNums.findIndex((num) => {
  //when num is less than 10
  return num < 10;
});

console.log(lessThanTen); // Output: 3
console.log(jumbledNums[3]); // Output: 5

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
  return animal[0] === 's';
});

//! .reduce() method returns a single value after iterating through the elements of an array// this will, in turn reduce the array

const numbers = [1, 2, 4, 10];
// summed nums is equal to the return value of the callback function
//callback function takes in to parameters. accuimulator starts as the first element in the array
//current value starts as the second
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 100); //setting a second parameter here will start current value at whatever integer you add here

console.log(summedNums); // Output: 117

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator:' + accumulator);
  console.log('The value of currentValue:' + currentValue);
  return accumulator + currentValue;
}, 100);

console.log(newSum);

//! .some() method test whether at least one element in the array passes the test implemented by the function

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(
  words.some((word) => {
    return word.length < 6;
  })
);

const interestingWords = words.filter((word) => {
  return word.length > 5;
});

console.log(
  interestingWords.every((word) => {
    return word.length() > 5;
  })
);

//? Recap

const cities = [
  'Orlando',
  'Dubai',
  'Edinburgh',
  'Chennai',
  'Accra',
  'Denver',
  'Eskisehir',
  'Medellin',
  'Yokohama',
];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach((city) => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter((city) => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0];
}, 'C');

console.log(word);

// Choose a method that will return a new array
const smallerNums = nums.map((num) => num - 5);

// Choose a method that will return a boolean value
nums.some((num) => num < 0);
