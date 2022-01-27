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

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = (arr) => {
  let results = [];
  // The 'outer' for loop - loops through each element in the array
  for (let i = 0; i < arr.length; i++) {
    number = arr[i];

    // The 'inner' while loop - searches for smallest power of 2 greater than the given number
    j = 1;
    while (j < number) {
      j = j * 2;
    }
    results.push(j);
  }
  return results;
};

console.log(smallestPowerOfTwo(numbers));
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

//*Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.

const veggies = ["broccoli", "spinach", "cauliflower", "broccoflower"];

const politelyDecline = (veg) => {
  console.log("No " + veg + " please. I will have pizza with extra cheese.");
};

// Write your code here:
const declineEverything = (arr) => {
  arr.forEach((veggies) => {
    politelyDecline(veggies);
  });
};

const acceptEverything = (arr) => {
  arr.forEach((veggies) => {
    console.log(`Ok, I guess I will eat some ${veggies}.`);
  });
};

//*Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.

const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = (num) => num * num;

// Write your code here:

const squareNums = (num) => {
  const map1 = num.map((x) => x * x);
  console.log(map1);
};

squareNums(numbers);
