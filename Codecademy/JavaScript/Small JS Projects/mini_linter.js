//* Set story to what we want to lint, create array for overused and and unnecessary words
let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
let overusedWords = ["really", "very", "basically"];
let unnecessaryWords = ["extremely", "literally", "actually"];

//* split string and assign to new array called storyWords
const storyWords = story.split(" ");
//* Do the same, but for each letter
const storyLetters = story.split("");

//console.log(storyWords);

//*create better Words array, filter storyWords using iterator function
const betterWords = storyWords.filter(
  (word) =>
    //* return word only if it's not included in unnecessaryWords
    !unnecessaryWords.includes(word)
);

//console.log(betterWords);

//* create overusedwordcount counter
let overusedWordsCount = 0;
// for each word in betterWords
for (word of betterWords) {
  //if overusedWords is included in word, increment overused word count.
  if (overusedWords.includes(word)) {
    overusedWordsCount++;
  }
}

//* Create a sentenceCount counter, set to zero. Idea here is to increment the counter when we see a '.' or '!'
let sentenceCount = 0;
//for each letter of storyLetters
storyLetters.forEach((letter) => {
  //if letter = ! or . increment count
  if (letter === "!" || letter === ".") {
    sentenceCount++;
  }
});

//* Log Word Count, Overused Word Count, and sentence count
console.log(`Current word count: ` + storyWords.length);
console.log(`You have used overused words ${overusedWordsCount} times.`);
console.log(`Current sentence count: ${sentenceCount}`);

//* Join storyWords
console.log(betterWords.join(" "));
