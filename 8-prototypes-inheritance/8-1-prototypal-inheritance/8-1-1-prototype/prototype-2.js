let animal = {
	eats: true, 
	walk() {
		alert("Animal walk");
	}
}; 

let rabbit = {
	jumps: true,
	__proto__: animal
}; 

// walk is taken from the prototype 
rabbit.walk(); // Animal walk 

