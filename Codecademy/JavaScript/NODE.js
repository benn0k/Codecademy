//?Currently the .checkEnergy() method is not producing the correct output because it is using arrow function syntax.
//?Refactor, or change, the method to use a function expression
/*
const robot = {
  energyLevel: 100,
  checkEnergy: () => {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  },
};

robot.checkEnergy();
*/
//!Change

const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  },
};

robot.checkEnergy();
