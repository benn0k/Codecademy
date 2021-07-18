//HEADER 
let gainedDoller = true;
let favoriteAnimal = 'dog';
let myName = 'Ryan';
let myCity = 'Fargo';

//Log
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(Math.random() * 100));
console.log(Number.isInteger(2017));

//variables 
var favoriteFood = 'pizza';
var numOfSlices = 8;
console.log(numOfSlices);

//Varibles -- Assignment Operators 
levelUp += 5; //Increment 5 assign variable
gainedDoller++; //Increment 1 assign
console.log('My favorite animal:' + favoriteAnimal); // adds string onto text, prints
console.log('My name is ' + myName + '. My favorite city is ' + myCity + '.');

//Interpolation
console.log(`My name is ${myName}. My favorite city is ${myCity}`); // Logs the string, shorthand calls to variables 

//typeof
let newVariable = 'Playing around with typeof.';
console.log(typeof (newVariable)); //String
newVariable = 1;
console.log(typeof (newVariable)); //integer

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
let myName = 'Ryan'.toLowerCase();

earlyYears *= 10.5;
laterYears *= 4;



console.log(`My name is ${myName}. I am ${myAge} years old in human years which is 
${myAgeInDogYears} years old in dog years.`);

//if Statement
let sale = true;
sale = false;
if (sale) {
  console.log('Time to buy!') //since sale = false, nothing is logged
}


//Logical Operators - uses or || operator to 
true || false; // true
10 > 5 || 10 > 20; // true
false || false; // false
10 > 100 || 10 > 20; // false


let mood = 'sleepy';
let tirednessLevel = 6;
if (mood == 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep')
} else {
  console.log('not bed time yet.')
}



let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {

  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;

}

//define a Name, question, random number and empty variable for eightball
let userName = 'Ryan';
let userQuestion = 'Will you have good fortune?';
let randomNumber = Math.floor(Math.random() * 8);
let eightball = '';
//is username true? if so, log string 1, else log string 2
userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');
//name + question
console.log(`${userName},` + userQuestion);
//Switch randomnumber
switch (randomNumber) {
  case 0: //if zero
    console.log('It is certain'); //log this
    break; //break

  case 1:
    console.log('It is certain');
    break;

  case 2:
    console.log('It is decidedly so');
    break;

  case 3:
    console.log('Cannot predict now');
    break;

  case 4:
    console.log('My sources say no');
    break;

  case 5:
    console.log('Outlook not so good');
    break;

  case 6:
    console.log('Signs point to yes');
    break;

  case 7:
    console.log('Do not count on it');
    break;

  case 8:
    console.log('Reply hazy try again');
    break;

  default:
    console.log('Uh oh! Something has gone wrong! Alert the developer')
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
  console.log(`Late adults run at 11:00AM. Your racer number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`Youth registrants run at 12:30 PM. Your racer number is ${raceNumber}.`);
} else if (runnerAge === 18) {
  console.log(`Please see the regestration desk `);
}

console.log(raceNumber);