let animal = {
	eats: true,
	walk() {
		/* this method won't be used by rabbit */
	}
}; 

let rabbit = {
	__proto__: animal
};

rabbit.walk = function() {
	alert("Rabbit! Bounce-bounce!");
};

rabbit.walk(); // Rabbit! Bounce-bounce! 

