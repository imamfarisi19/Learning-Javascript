let animal = {
	eat: function() { // intentionally writing like this this instead of eat() { ...
		// ...
	}
}; 

let rabbit = {
	__proto__: animal, 
	eat: function() {
		super.eat(); 
	}
}; 

rabbit.eat(); // Error calling super (because there's no [[HomeObject]]) 

