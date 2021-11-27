const menu = {
  //Define Object courses, create empty array for each property
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  // create getters and setters for each property
  get appetizers() {},
  set appetizers(appetizerIn) {},

  get mains() {},
  set mains(mainsIn) {},

  get desserts() {},
  set desserts(dessertsIn) {},
  //creates getter for _courses
  get _courses() {
    //return apps, mains, desserts
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  //create method to add dish. Takes in name, price
  addDishToCourse(courseName, dishName, coursePrice) {
    //create object dish that includes name and price
    const dish = {
      name: courseName,
      dish: dishName,
      price: coursePrice,
    };
    //push object to
    this._courses[courseName].push(dish);
  },
  //create function to get random Dish
  getRandomDishFromCourse: function (courseName) {
    //get array of coursename from _courses
    const dishes = this._courses[courseName];
    // return a dish from dishes using random index
    const randomIndex = Math.floor(Math.random() * dishes.length);
  },
  //create function to generate random meal
  generateRandomMeal: function () {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const mains = this.getRandomDishFromCourse("mains");
    const desserts = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + mains.price + desserts.price;

    return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name}. The price is $${totalPrice},`;
  },
};
//Add dishes to course
menu.addDishToCourse("appetizers", "Caesar Salad", 4.0);
menu.addDishToCourse("mains", "Steak", 4);
menu.addDishToCourse("dessert", "Cake", 4);
//debug and check
let meal = menu.generateRandomMeal();

console.log(meal);
