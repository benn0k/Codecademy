//! The this keyword

const goat = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
  diet() {
    console.log(this.dietType);
  },
};

goat.diet();
// Output: herbivore
//* --> Example
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

//* Setters

//?Along with getter methods, we can also create setter methods which reassign values of existing properties within an object.
const person = {
  _age: 37,
  set age(newAge) {
    if (typeof newAge === "number") {
      this._age = newAge;
    } else {
      console.log("You must assign a number to age");
    }
  },
};

person.age = 40;
console.log(person._age); // Logs: 40
person.age = "40"; // Logs: You must assign a number to age

//*---> Example
