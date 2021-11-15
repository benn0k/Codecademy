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
