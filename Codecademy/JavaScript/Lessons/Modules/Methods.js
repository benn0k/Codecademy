//! Methods
//? Method
//Think of them like arrays for code snippets
const alienShip = {
  invade() {
    console.log(
      "Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon."
    );
  },
};

alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'

//* Example--->
let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

// Write your code below
//? Below the retreatMessage variable in the code editor, create an alienShip object. It should contain a method .retreat() which will console.log() the retreatMessage

// create object
const alienShip = {
  //first method
  retreat() {
    console.log(retreatMessage);
  },
  //second method
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};
//call methods
alienShip.retreat();
alienShip.takeOff();
