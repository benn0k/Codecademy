let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};

// Write your code below

//?Write a function greenEnergy() that has an object as a parameter and sets that object’s 'Fuel Type' property to 'avocado oil'.

let greenEnergy = (obj) => {
  obj["Fuel Type"] = "Avocado Oil";
};

greenEnergy(spaceship);

console.log(spaceship["Fuel Type"]);
