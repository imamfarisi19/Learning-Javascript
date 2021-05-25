function sayHi() {
	if(true) {
		var phrase = "Hello";
	}
	alert(phrase); // works
}

sayHi(); 
alert(phrase); // ReferenceError: phrase is not defined

