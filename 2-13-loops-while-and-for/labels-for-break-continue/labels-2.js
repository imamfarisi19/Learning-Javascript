outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`,'');

    // if an empty string or canceled, then break out both loops
    if (!input) break outer; // (*) 

    // do something with the value...
  }
}
alert('Done!')
