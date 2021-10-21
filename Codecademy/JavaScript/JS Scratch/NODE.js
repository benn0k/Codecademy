let bobsFollowers = ["Ryan", "Brady", "Jon", "Thomas"];
let tinasFollowers = ["Tamie", "Brady", "Thomas"];
let mutualFollowers = [];

/*
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
} 

//Will iterate through all of Bob's followers until end
for (let i = 0; i < bobsFollowers.length; i++) {
// If bobs followers i does not return -1 (does not exist)
  if (tinasFollowers.indexOf(bobsFollowers[i]) != -1) {
      //push bobs followers i to mutual followers 
    mutualFollowers.push(bobsFollowers[i]);
  }

}

*/

//iterate through all of bob's followers until end
for (let i = 0; i < bobsFollowers.length; i++) {
  //if tinasfollowers includes (bobsFollowers[i])
  if (tinasFollowers.includes(bobsFollowers[i])) {
    //push bobsFollowers to mutualFollowers
    mutualFollowers.push(bobsFollowers[i]);
  }
}

console.log(mutualFollowers);
