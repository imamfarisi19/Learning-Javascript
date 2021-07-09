function * generateSequence() {
	yield 1;
	yield 2;
	yield 3; 
}

let generator = generateSequence();

for(let value of generatot) {
	alert(value); // 1, then 2, then 3 
}

