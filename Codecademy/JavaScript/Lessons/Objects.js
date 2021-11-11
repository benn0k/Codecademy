//!Objects!
// !An object literal with two key-value pairs
let spaceship = { "Fuel Type": "diesel", color: "silver" };

const fasterShip = { color: "silver", "Fuel Type": "Turbo Fuel" };

// !Accessing Properties

//!Dot Notaion

let spaceship = {
  homePlanet: "Earth",
  color: "silver",
};
//object   property name
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',

spaceship.favoriteIcecream; // Returns undefined

//*--> Example
let spaceship = {
  homePlanet: "Earth",
  color: "silver",
  "Fuel Type": "Turbo Fuel",
  numCrew: 5,
  flightPath: ["Venus", "Mars", "Saturn"],
};

// Write your code below

let crewCount;

crewCount = spaceship.numCrew;

console.log(crewCount);

let planetArray = spaceship.flightPath;

//! Bracket Notation

["A", "B", "C"][0]; // Returns 'A'

let spaceship = {
  "Fuel Type": "Turbo Fuel",
  "Active Duty": true,
  homePlanet: "Earth",
  numCrew: 5,
};
//We can reference variable returns
spaceship["Active Duty"]; // Returns true
spaceship["Fuel Type"]; // Returns  'Turbo Fuel'
spaceship["numCrew"]; // Returns 5
spaceship["!!!!!!!!!!!!!!!"]; // Returns undefined

//function
let returnAnyProp = (objectName, propName) => objectName[propName];

returnAnyProp(spaceship, "homePlanet"); // Returns 'Earth'

//*---> Example
let spaceship = {
  "Fuel Type": "Turbo Fuel",
  "Active Mission": true,
  homePlanet: "Earth",
  numCrew: 5,
};

let propName = "Active Mission";

// Write your code below

var isActive = spaceship["Active Mission"];

// debug;
// console.log(isActive); //true expected

//access via arrow function

let returnAnyProp = (objectName, propName) => objectName[propName];
//object  //property
console.log(returnAnyProp(spaceship, "Active Mission")); //true expected

//! Property Assignment

const spaceship = { type: "shuttle" };

spaceship = { type: "alien" }; // TypeError: Assignment to constant variable.
spaceship.type = "alien"; // Changes the value of the type property
spaceship.speed = "Mach 5"; // Creates a new key of 'speed' with a value of 'Mach 5'

const spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  mission: "Explore the universe",
};

delete spaceship.mission; // Removes the mission property

//*----> Example
let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  color: "silver",
  "Secret Mission": "Discover life outside of Earth.",
};

// Write your code below
