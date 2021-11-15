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
