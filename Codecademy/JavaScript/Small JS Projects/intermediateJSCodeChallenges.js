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
const convertToBaby = (animalsArr) => {
  babyAnimals = [];
  for (i = 0; i < animalsArr.length; i++) {
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
const greetings = ["hello", "hi", "heya", "oi", "hey", "yo"];

console.log(shoutGreetings(greetings));
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
s;

// Write your code here:
const sortYears = (arr) => {
  arr.sort().reverse();
  return arr;
};
// Feel free to uncomment the below code to test your function:

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

console.log(sortYears(years));

// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]
// Write your code here:

//declare new justCoolStuff, pass two variables
const justCoolStuff = (arr1, arr2) => {
  // result = filtering through arr1, if the current iteration is included in array two, log it to res
  res = arr1.filter((item) => arr2.includes(item));
  //return
  return res;
};

// Feel free to uncomment the code below to test your function

const coolStuff = [
  "gameboys",
  "skateboards",
  "backwards hats",
  "fruit-by-the-foot",
  "pogs",
  "my room",
  "temporary tattoos",
];

const myStuff = [
  "rules",
  "fruit-by-the-foot",
  "wedgies",
  "sweaters",
  "skateboards",
  "family-night",
  "my room",
  "braces",
  "the information superhighway",
];

console.log(justCoolStuff(myStuff, coolStuff));
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

// Write your code here:

const isTheDinnerVegan = (food) => {
  if (food.source === "plant") {
    return true;
  }
  return false;
};

// Feel free to comment out the code below to test your function

const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
  { name: "dessert twinkies", source: "unknown" },
];

console.log(dinner.every(isTheDinnerVegan));
// Should print false
