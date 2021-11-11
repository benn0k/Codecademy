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
