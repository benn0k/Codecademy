//?In main.js there is an object robot, add a property of model and assign to it a value of '1E78V2'. Add another property, energyLevel and assign to it a value of 100.

const robot = {
  model: `1E78V2`,
  energyLevel: 100,
  provideInfo() {
    //scoped local
    return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
  },
};

console.log(robot.provideInfo());
