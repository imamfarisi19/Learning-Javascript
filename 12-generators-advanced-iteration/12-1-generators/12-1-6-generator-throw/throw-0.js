function* gen() {
	try {
		let result = yield "2 + 2 = ?"; // (1) 

		alert("The execution does not reach here, because the exception is thrown above");
	} catch(e) {
		alert(e); // shows the error 
	}
}

let generator = gen(); 

let question = generator.next().value;

generator.throw(new Error("The answer is not found in my database")); // (2) 

