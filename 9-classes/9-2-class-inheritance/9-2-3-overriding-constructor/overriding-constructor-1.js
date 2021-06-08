class Animal {
	constructor(name) {
		this.speed = 0; 
		this.name = name; 
	}
	// ...
}

class Rabbit extends Animal {
	constructor(name, earLength) {
		this.speed = 0;
		this.name = name;
		this.earLength = earLength;
	}

	// ...
}

// Doesn't work! 
let rabbit = new Rabbit("White Rabbit", 10); // Error: this is not defined. 

