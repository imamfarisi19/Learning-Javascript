function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // split the word by letters, sort them and join back 
    let sorted = word // PAN
      .toLowerCase() // pan
      .split('') // ['p','a','n']
      .sort() // ['a','n','p']
      .join(''); // anp
    map.set(sorted, word); 
  } 

  return Array.from(map.values()); 
} 

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectaters"]; 

alert( aclean(arr) ); 

