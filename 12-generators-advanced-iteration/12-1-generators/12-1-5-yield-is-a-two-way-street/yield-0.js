function* gen() {
	// Pass a question to the outer code and wait for an answer 
	let result = yield "2 + 2 = ?"; // (*) 

	alert(result); 
} 

let generator = gen(); 

let question = generator.next().value; // <-- yield returns the value 

generator.next(4); // --> pass the result into the generator 

