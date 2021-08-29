// define a function to "get" sleep hours, return
const getSleepHours = (day) => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 8;
  } else if (day === "wednesday") {
    return 8;
  } else if (day === "thursday") {
    return 8;
  } else if (day === "friday") {
    return 8;
  } else if (day === "saturday") {
    return 8;
  } else if (day === "sunday") {
    return 8;
  }
};

//debug break
//console.log(getSleepHours('monday'));

//define a function to add up total sleep hours for the week. Implicit return, don't add brackets
const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

// function to add up ideal sleep hours
const getIdealSleepHours = () => {
  const idealHours = 3;
  return idealHours * 7;
};

//debug break

//console.log(getActualSleepHours());
//console.log (getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You are getting enough sleep!");
  } else if (actualSleepHours < idealSleepHours) {
    console.log("You are not getting enough sleep!");
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        " hour(s) less sleep than you needed this week. Get some rest"
    );
  } else {
    console.log("You are getting too much sleep!");
    console.log(
      "You got " +
        (actualSleepHours - idealSleepHours) +
        " hour(s) more sleep than you needed this week."
    );
  }
};

calculateSleepDebt();
