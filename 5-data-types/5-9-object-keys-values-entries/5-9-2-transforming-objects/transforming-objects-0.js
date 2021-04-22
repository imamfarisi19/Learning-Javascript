let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
}; 

let doublePrices = Object.fromEntries(
  // convert to array, map, and then fromEntries gives back the object 
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat); // 8 

