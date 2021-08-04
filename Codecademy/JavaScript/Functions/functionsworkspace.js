//Create function by calling function, lablaing it, writing code
function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}
//call function, will print the above code 
sayThanks('Cole');

/// Default sets can be defined as such

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}

makeShoppingList()

//Return
//Helper Functions
function monitorCount(rows, columns) {
    //below returns the value out of the function
    return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);
//you can call functions inside of functions
function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

//Function Expressions
//you can create functions that call 
const plantNeedsWater = function plantNeedsWater (day){
    if (day === 'Wednesday'){
        return true;
    }
    else{return false;}
}

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));

//Arrow Functions
// you can remove the extra function xxx by replacing it with the code below 
const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };
  
  //we can rewrite the above as such

  const plantNeedsWater = day => day === 'Wednesday' ? true : false;