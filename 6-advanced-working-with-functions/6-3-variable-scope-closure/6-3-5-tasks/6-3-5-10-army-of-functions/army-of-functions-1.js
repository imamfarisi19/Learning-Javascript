function makeArmy() {
	let shooters = [];

	let i = 0;
	while (i < 10) {
		let j = i;
		let shooter = function() { // shooter function
			alert(j); // should show its number
		};
  shooters.push(shooter);
	i++;
	}

	return shooters;
}

let army = makeArmy();

// Now the code works correctly 
army[0](); // 0 
army[5](); // 5 

