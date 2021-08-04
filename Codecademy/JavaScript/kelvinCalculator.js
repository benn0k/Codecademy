//Set a constant variable for Kelvin in Fahrenheit 
const kelvin = 293;
// Celsius is 273 degrees less than kelvin, create celsius and set it equal to kelvin - 273
let celsius = kelvin - 273;
// Set a variable for fahrenheit, equal to celsius times 9/5ths + 32, rounded down to a no decimal places
let fahrenheit = Math.floor(celsius * (9/5) + 32);
let newton = Math.floor(celsius * (33/100));

console.log(`The temprature is ${fahrenheit} degrees Fahrenheit.`);