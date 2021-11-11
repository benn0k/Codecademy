let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  color: "silver",
  "Secret Mission": "Discover life outside of Earth.",
};

// Write your code below

//?create var assigned to => change color in spaceship object to "glorious gold"

let spaceshipColor = (spaceship.color = "glorious gold");
console.log(spaceshipColor); //glorious gold expected

//? add numEngines property with value = 5 to spaceship object

let spaceshipEngines = (spaceship.numEngines = 3);
console.log(spaceshipEngines); //3 expected
