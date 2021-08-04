//*Define Username, question we're going to ask, eightball
var userName = 'Ryan';
var userQuestion = 'Will I live a long happy life?';
var eightBall = '';
//* Create a random number
var randomNumber = Math.floor(Math.random() * 8);
/* 
 * Ternary Operator, is username is true, then log 'Hello username'
 * else, log 'Please enter a valid username' 
 */
userName ? console.log(`Hello ${userName}!`) : console.log('Please enter a valid username');

console.log(`${userName} the question you asked was: ${userQuestion}`);

console.log(randomNumber);

//! Switch Version

switch (randomNumber) {
    case 0:
        eightBall = 'Outlook looks good!'
        break;
    case 1:
        eightBall = 'Outlook not so great!'
        break;
    case 2:
        eightBall = 'It will be so.'
        break;
    case 3:
        eightBall = 'Not a chance.'
        break;
    case 4:
        eightBall = 'Yes, you will!'
        break;
    case 5:
        eightBall = 'It will not be so.'
        break;
    case 6:
        eightBall = 'Try again.'
        break;
    case 7:
        eightBall = 'No.'
        break;


}

console.log(eightBall);

//! If/Else Version


if (randomNumber === 0) {
    console.log('Outlook looks good!');
} else if (randomNumber === 1) {
    console.log('Outlook not so great!');
} else if (randomNumber === 2) {
    console.log('It will be so.');
} else if (randomNumber === 3) {
    console.log('Not a chance.');
} else if (randomNumber === 4) {
    console.log('Yes, you will!');
} else if (randomNumber === 5) {
    console.log('It will not be so.');
} else if (randomNumber === 6) {
    console.log('Try again.');
} else if(randomNumber === 7) {
    console.log('No.')
} else if (randomNumber > 7) {
    console.log ('Invalid Response');
}