const robot = {
  _energyLevel: 100,
  recharge() {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
  },
};

//?Below the robot object, reassign the _energyLevel property to 'high'.

robot._energyLevel = "high";

//? Now take a look at the new recharge method in robot. .recharge() will add 30 to _energyLevel.
//?What will happen now that _energyLevel isn’t a number?

robot.recharge();
