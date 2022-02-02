let groceries = (arr) => {
  let splitArray = arr.map((foodItem) => {
    return foodItem.item;
  });
  if (splitArray.length <= 1) {
    return splitArray[0];
  } else {
    const part2 = splitArray.pop();
    const part1 = splitArray.join(', ');
    return `${part1} and ${part2}`;
  }
  // prints Carrots, Hummus, Pesto and Rigatoni
};

groceries([{ item: 'Lettuce' }]);
