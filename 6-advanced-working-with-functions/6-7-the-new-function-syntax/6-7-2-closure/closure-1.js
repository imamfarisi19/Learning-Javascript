function getFunc() {
	let value = "test";

	let func = function() { alert(value); };

	return func;
}

getFunc()(); // "test", from the Lexical Environment of getFunc 

