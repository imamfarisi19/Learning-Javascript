function pseudoRnadom(seed) {
	let value = seed; 
	
	return function() {
	value = value * 16807 % 2147483647; 
	}
}

let generator = pseudoRandom(1); 

alert(generator()); // 16087
alert(generator()); // 282475249
alert(generator()); // 1622650073
