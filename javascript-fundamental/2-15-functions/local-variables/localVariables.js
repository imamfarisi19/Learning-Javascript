function showMessage() {
	let message = "Hello, I'm JavaScript!"; // local variable

	alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! the variable is local to the function 

