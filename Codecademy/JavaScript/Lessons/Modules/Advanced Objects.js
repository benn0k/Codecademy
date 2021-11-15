//! The this keyword

const goat = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
  diet() {
    console.log(this.dietType);
  },
};

goat.diet();
// Output: herbivore
//* --> Example
