//! .forEach() will execute the same code for each element in an array
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function (fruitItem) {
  console.log(`I want to eat a ` + fruitItem);
});

//*fruits.forEach() calls the forEach method on the Fruits array
//*forEach() takes an argument of callback function
//*forEach() loops
