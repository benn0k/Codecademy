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
