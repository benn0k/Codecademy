let raceNumber = Math.floor(Math.random() * 1000);
var regesteredEarly = false;
let runnerAge = 17;

if (runnerAge > 18 && regesteredEarly === true) {
    raceNumber += 1000;
}

if (runnerAge > 18 && regesteredEarly === true) {
    console.log(`Your race is at 9:30AM and you racer number is ${raceNumber}.`);
} else if (runnerAge > 18 && regesteredEarly === false) {
    console.log(`Late adults run at 11:00AM. Your racer number is ${raceNumber}`);
} else if (runnerAge < 18) {
    console.log(`Youth registrants run at 12:30 PM. Your racer number is ${raceNumber}`);
}

console.log(raceNumber);