//! Functions as Data
const announceThatIAmDoingImportantWork = () => {
  console.log('I’m doing very important work!');
};

//can be written as

const busy = announceThatIAmDoingImportantWork;

busy(); // This function call barely takes any space!

// Write your code below

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for (let i = 1; i <= 1000000; i++) {
    if (2 + 2 != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;

is2p2(); // returns 'Something has gone very wrong :(

console.log(is2p2.name); // returns checkThatTwoPlusTwoEqualsFourAMillionTimes

//! Functions as Paramaters

const timeFuncRuntime = (funcParameter) => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

const addOneToOne = () => 1 + 1;

timeFuncRuntime(addOneToOne);

var time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

var checkConsistentOutput = (myFunction, myValue) => {
  let firstTry = myFunction(myValue);
  let secondTry = myFunction(myValue);

  if (firstTry === secondTry) {
    return firstTry;
  } else {
    return 'This function returned inconsistent results';
  }
};

checkConsistentOutput(addOneToOne, 1);
