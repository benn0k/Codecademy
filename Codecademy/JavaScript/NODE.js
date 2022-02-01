let groceries = (arr) => {
  let splitArray = arr.map((foodItem) => {
    return foodItem.item;
  });
  const part2 = splitArray.pop();
  const part1 = splitArray.join(', ');
  console.log(`${part1} and ${part2}`); // prints Carrots, Hummus, Pesto and Rigatoni
};

groceries([
  { item: 'Carrots' },
  { item: 'Hummus' },
  { item: 'Pesto' },
  { item: 'Rigatoni' },
]);
