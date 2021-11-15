//! Nested Objects

//? Objects can contain other objects
const spaceship = {
  //telescope of spaceship
  telescope: {
    //data of telescope of spaceship
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    //spacesip crew captian sandra, who has a degree in computer engineering
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};
spaceship.nanoelectronics["back-up"].battery; // Returns 'Lithium'
spaceship.crew.captain.encourageTeam(); // "We got this!" expected
//*Example--->
let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      "Favorite Foods": ["cookies", "cakes", "candy", "spinach"],
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};

//? Create a variable capFave and assign the captain‘s favorite food

let capFave = spaceship.crew.captain["Favorite Foods"][0];
//console.log(capFave);

//? Right now the passengers property has a value of null. Instead, assign as its value an array of objects.

//this will nest an object in Passengers known as "names" with the array
spaceship.passengers = { names: ["Ryan", "Brady", "Jon"] };

//console.log(passengers);
//?Create a variable firstPassenger and assign the first passenger as its value (the element in the 0th index of the spaceship.passengers array you just made).

let firstPassenger = spaceship.passengers.names[0];
console.log(firstPassenger);

//* Pass By Reference

//?Objects are passed by reference. This means when we pass a variable assigned to an object into a function as an argument, the computer interprets the parameter name as pointing to the space in memory holding that object.
//? Basically this just means that we can mutate objects even if they're assigned a const var

//*---> Example

let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};
// Write your code below

let greenEnergy = (obj) => {
  obj["Fuel Type"] = "avocado oil";
};
greenEnergy(spaceship);

console.log(spaceship["Fuel Type"]);

//? Write a function remotelyDisable() that has an object as a parameter and sets (or reassigns) that object’s disabled property to true.

let remotelyDisable = (obj) => {
  obj.disabled = true;
};

remotelyDisable(spaceship);
console.log(spaceship);

//* Looping through objects

//? for...in will execute a given block of code for each property in an object.
//* ---> Example
let spaceship = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};

//?Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew roles and names in the following format

// for...in
/*

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}
*/
//? Second for in loop
for (let crewMember in spaceship.crew) {
  console.log(
    `${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`
  );
}
//Name: Degree Expected

//* Arrow Function and this

const goat = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
  diet: () => {
    console.log(this.dietType);
  },
};

goat.diet(); // Prints undefined --> this is because an arrow function is tied to the global scope "dietType" which is undefined\
//Basically, don't do this

//*----> Example

//?Currently the .checkEnergy() method is not producing the correct output because it is using arrow function syntax.
//?Refactor, or change, the method to use a function expression
/*
const robot = {
  energyLevel: 100,
  checkEnergy: () => {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  },
};

robot.checkEnergy();
*/
//!Change

const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  },
};

//* Privacy
//? JS doesn't have built in "privacy" for objects, so we use a forward slash instead
const bankAccount = {
  _amount: 1000,
};
//* --> Example
const robot = {
  _energyLevel: 100,
  recharge() {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
  },
};

//?Below the robot object, reassign the _energyLevel property to 'high'.

robot._energyLevel = "high";

//? Now take a look at the new recharge method in robot. .recharge() will add 30 to _energyLevel.
//?What will happen now that _energyLevel isn’t a number?

robot.recharge();

//* Getters
//Getters are methods that get and return the internal properties of an object.

const person = {
  _firstName: "John",
  _lastName: "Doe",
  get fullName() {
    if (this._firstName && this._lastName) {
      return `${this._firstName} ${this._lastName}`;
    } else {
      return "Missing a first name or a last name.";
    }
  },
};

// To call the getter method:
person.fullName; // 'John Doe'

//* Example -->
//?In robot, create a getter method named energyLevel using the get keyword. Leave function body blank for now.

//?Inside the getter method, add an if statement to check if this._energyLevel is a number
const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === "number") {
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return `System malfunction: cannot retrieve energy level`;
    }
  },
};
//getter method, doesn't need to be invoked with a ()
console.log(robot.energyLevel);
