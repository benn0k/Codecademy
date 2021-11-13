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
