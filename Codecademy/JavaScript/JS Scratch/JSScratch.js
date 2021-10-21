//HEADER
let gainedDoller = true;
let favoriteAnimal = "dog";
let myName = "Ryan";
let myCity = "Fargo";

//Log
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(Math.random() * 100));
console.log(Number.isInteger(2017));

//variables
var favoriteFood = "pizza";
var numOfSlices = 8;
console.log(numOfSlices);

//Varibles -- Assignment Operators
levelUp += 5; //Increment 5 assign variable
gainedDoller++; //Increment 1 assign
console.log("My favorite animal:" + favoriteAnimal); // adds string onto text, prints
console.log("My name is " + myName + ". My favorite city is " + myCity + ".");

//Interpolation
console.log(`My name is ${myName}. My favorite city is ${myCity}`); // Logs the string, shorthand calls to variables

//typeof
let newVariable = "Playing around with typeof.";
console.log(typeof newVariable); //String
newVariable = 1;
console.log(typeof newVariable); //integer

//Test Program

//declare variable
let kelvin = 293;
//translate to celsius
let celsius = kelvin - 273;
//translate to farenheit
let fahrenheit = celsius * (9 / 5) + 32;
//floor it
fahrenheit = Math.floor(fahrenheit);
//print with interpolation
console.log(`The temprature is ${fahrenheit} degrees Fahrenheit`);

let myAge = 27;
let earlyYears = 2;
let laterYears = myAge - 2;
let myAgeInDogYears = earlyYears + laterYears;
let myName = "Ryan".toLowerCase();

earlyYears *= 10.5;
laterYears *= 4;

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is 
${myAgeInDogYears} years old in dog years.`);

//if Statement
let sale = true;
sale = false;
if (sale) {
  console.log("Time to buy!"); //since sale = false, nothing is logged
}

//Logical Operators - uses or || operator to
true || false; // true
10 > 5 || 10 > 20; // true
false || false; // false
10 > 100 || 10 > 20; // false

let mood = "sleepy";
let tirednessLevel = 6;
if (mood == "sleepy" && tirednessLevel > 8) {
  console.log("time to sleep");
} else {
  console.log("not bed time yet.");
}

let season = "summer";

if (season === "spring") {
  console.log("It's spring! The trees are budding!");
} else if (season === "winter") {
  console.log("It's winter! Everything is covered in snow.");
} else if (season === "fall") {
  console.log("It's fall! Leaves are falling!");
} else if (season === "summer") {
  console.log("It's sunny and warm because it's summer!");
} else {
  console.log("Invalid season.");
}

let athleteFinalPosition = "first place";

switch (athleteFinalPosition) {
  case "first place":
    console.log("You get the gold medal!");
    break;
  case "second place":
    console.log("You get the silver medal!");
    break;
  case "third place":
    console.log("You get the bronze medal!");
    break;
  default:
    console.log("No medal awarded.");
    break;
}

//define a Name, question, random number and empty variable for eightball
let userName = "Ryan";
let userQuestion = "Will you have good fortune?";
let randomNumber = Math.floor(Math.random() * 8);
let eightball = "";
//is username true? if so, log string 1, else log string 2
userName ? console.log(`Hello ${userName}!`) : console.log("Hello!");
//name + question
console.log(`${userName},` + userQuestion);
//Switch randomnumber
switch (randomNumber) {
  case 0: //if zero
    console.log("It is certain"); //log this
    break; //break

  case 1:
    console.log("It is certain");
    break;

  case 2:
    console.log("It is decidedly so");
    break;

  case 3:
    console.log("Cannot predict now");
    break;

  case 4:
    console.log("My sources say no");
    break;

  case 5:
    console.log("Outlook not so good");
    break;

  case 6:
    console.log("Signs point to yes");
    break;

  case 7:
    console.log("Do not count on it");
    break;

  case 8:
    console.log("Reply hazy try again");
    break;

  default:
    console.log("Uh oh! Something has gone wrong! Alert the developer");
    console.log(randomNumber);
    break;
}

let raceNumber = Math.floor(Math.random() * 1000);
var regesteredEarly = false;
let runnerAge = 27;

if (runnerAge > 18 && regesteredEarly === true) {
  raceNumber += 1000;
}

if (runnerAge > 18 && regesteredEarly === true) {
  console.log(`Your race is at 9:30AM and you racer number is ${raceNumber}.`);
} else if (runnerAge > 18 && regesteredEarly === false) {
  console.log(
    `Late adults run at 11:00AM. Your racer number is ${raceNumber}.`
  );
} else if (runnerAge < 18) {
  console.log(
    `Youth registrants run at 12:30 PM. Your racer number is ${raceNumber}.`
  );
} else if (runnerAge === 18) {
  console.log(`Please see the regestration desk `);
}

console.log(raceNumber);

let athleteFinalPosition = "first place";

switch (athleteFinalPosition) {
  case "first place":
    console.log("You get the gold medal!");
    break;
  case "second place":
    console.log("You get the silver medal!");
    break;
  case "third place":
    console.log("You get the bronze medal!");
    break;
  default:
    console.log("No medal awarded.");
    break;
}

//Blocks and scope

const city = "New York City";

function logCitySkyline() {
  let skyscraper = "Empire State Building";
  return "The stars over the " + skyscraper + " in " + city;
}

console.log(logCitySkyline());

var satellite = "The Moon";
var galaxy = "The Milky Way";
var stars = "North Star";

const callMyNightSky = () => {
  stars = "Sirius";
  return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

const logVisibleLightWaves = () => {
  let lightWaves = "Moonlight";
  let region = "The Arctic";
  if (region === "The Arctic") {
    let lightWaves = "Northern Lights";
    console.log(lightWaves);
  }

  console.log(lightWaves);
};

logVisibleLightWaves();

const name = "Ryan";

// The scope of `random` is too loose

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
};

// The scope of `days` is too tight
const getTrainingDays = (event) => {
  let days;

  if (event === "Marathon") {
    days = 50;
  } else if (event === "Triathlon") {
    days = 100;
  } else if (event === "Pentathlon") {
    days = 200;
  }

  return days;
};

// The scope of `name` is too tight
const logEvent = (event, name) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (days, name) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime

logEvent(event, name);
logTime(days, name);

const event2 = getRandEvent();

const days2 = getTrainingDays(event2);

const name2 = "Warren";

logEvent(event2, name2);
logTime(days2, name2);

// Arrays and functions

//Arrays time! time!!!
//declared as a normal variable, elements are nested between commas
let newYearsResolutions = [
  "Keep a journal",
  "Take a falconry class",
  "Learn to juggle",
];
//can be called

console.log(newYearsResolutions);

const concept = ["Toots", "can", "be", "farted"];

function changeArr(arr) {
  arr[3] = "FARTED";
}

changeArr(concept);

const famousSayings = [
  "Fortune favors the brave.",
  "A joke is a very serious thing.",
  "Where there is love there is life.",
];

let listItem = famousSayings([1]);
console.log(listItem);

console.log(famousSayings[2]);

//both let and const allow us to change elements inside of arrays. const just doesn't allow us to
//reassign the variable to something else

let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];
const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];
//replace condiments 0 with "Mayo"
condiments[0] = "Mayo";
console.log(condiments);
//replace condiments array with just "Mayo"
condiments = ["Mayo"];
//replace utensils 3 with Spoon
utensils[3] = "Spoon";
console.log(utensils);

//.length property -- appended to array, returns number of elements in array
const objectives = ["Learn a new languages", "Read 52 books", "Run a marathon"];
console.log(objectives.length);
//prints 2

//.push -- adds item to end of array
const chores = ["wash dishes", "do laundry", "take out trash"];

chores.push("Wash Dishes", "Water Plants");

console.log(chores);
//prints the 5 strings we have assigned to chores with "Wash dishes" and "Water Plants " aty the end

//.pop -- removes last item in array
const chores = [
  "wash dishes",
  "do laundry",
  "take out trash",
  "cook dinner",
  "mop floor",
];

chores.pop();

//removes mop floor

console.log(chores);

const groceryList = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains",
];
//.shift removes first item from
groceryList.shift();
//.unshift adds to beginning of array
groceryList.unshift("popcorn");
console.log(groceryList);

console.log(groceryList.slice(1, 4));
console.log(groceryList);
//returns bananas -> pasta

//define pastaIndex, set to grocerylist.indexOf -> .indexOf(); will return the index location of a string
const pastaIndex = groceryList.indexOf("pasta");
console.log(pastaIndex);
//returns 4

const concept = ["arrays", "can", "be", "mutated"];

function changeArr(arr) {
  arr[3] = "MUTATED";
}

changeArr(concept);

console.log(concept);
//MUTATED expected in [3]

function removeElement(newArr) {
  newArr.pop();
}
removeElement(concept);
console.log(concept);
//MUTATED removed - expected 3 array elements

let numberClusters = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const target = numberClusters[2][1];

//LOOPS

let vacationSpots = ["Ireland", "Japan", "Canada"];

// log all three elements separately

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

//the above above code can be written as

//declare counter, set to five. when counter is less than 11, add 1 to counter and log counter to console.log();
for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
}

for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}

//edit the above loop so that it's in reverse below

for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}

const vacationSpots = ["Bali", "Paris", "Tulum"];

// Write your code below -> Write a for loop that iterates through all items in the array

for (let i = 0; i < vacationSpots.length; i++) {
  console.log("I would love to visit " + vacationSpots[i]);
}

let bobsFollowers = ["Ryan", "Brady", "Jon", "Thomas"];
let tinasFollowers = ["Tamie", "Brady", "Thomas"];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
}

console.log(mutualFollowers);
