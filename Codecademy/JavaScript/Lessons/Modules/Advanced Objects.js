//! The this keyword

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
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
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === 'number') {
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
    if (typeof newAge === 'number') {
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  },
};

person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age

//*---> Example
//?Currently, in robot there is a getter method for numOfSensors but no setter method
//?Add a setter method named numOfSensors using the set keyword. Provide a parameter of num.

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === 'number') {
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.';
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
      console.log('we in here');
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  },
};

robot.numOfSensors = 100;

console.log(robot.numOfSensors);

//* Factory Function

//Function method to create objects
//pass in name, age, energy, catchphrase
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name: name,
    age: age,
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    },
  };
  //Object is logged above
};
// ghost object
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'

//* ---> Example
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    },
  };
};

//? Use your factory function by declaring a const variable named tinCan

const tinCan = robotFactory('P-500', true);

console.log(tinCan.model);

if (tinCan.mobile === true) {
  console.log('we in here');
}

//* Property value shorthand

const monsterFactory = (name, age) => {
  return {
    name: name,
    age: age,
  };
};

//can be written like

const monsterFactory = (name, age) => {
  return {
    name,
    age,
  };
};

//* Refactor this

function robotFactory(model, mobile) {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    },
  };
}

const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    },
  };
};

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false);
console.log(newRobot.model);
console.log(newRobot.mobile);

//* Destructed Assignment
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite',
  },
};

//
const residence = vampire.residence;
console.log(residence); // Prints 'Transylvania'
//can be written as
const { residence } = vampire;
console.log(residence); // Prints 'Transylvania'

const { day } = vampire.preferences;
console.log(day); // Prints 'stay inside'

//* Example
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  },
};

//?Use destructured assignment to create a const variable named functionality that extracts the functionality property of robot.

const { functionality } = robot;

functionality.beep();

//* Built in Object Methods

const robot = {
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75,
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);
console.log(robotKeys); //model, mobile, sentient, armor, energyLevel expected

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);
console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign(
  { laserBlaster: true, voiceRecognition: true },
  robot
);
console.log(newRobot);
