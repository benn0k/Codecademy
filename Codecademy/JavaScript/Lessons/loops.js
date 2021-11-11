// for...of

const spellingWord = "hippopotamus";

//for var x of var you want to iterate
for (const letters of spellingWord) {
  console.log(letters);
}

//for...of continue
const pokemonList = ["Pikachu", "Charizard", "Squirtle", "Yoshi", "Snorlax"];

// Write your code below

for (var pokemon of pokemonList) {
  // if pokemon === Yoshi, skip
  if (pokemon === "Yoshi") {
    continue;
  }
  console.log(`You caught a ${pokemon}!`);
}

//"Pikachu", "Charizard", "Squirtle", "Snorlax" expected
