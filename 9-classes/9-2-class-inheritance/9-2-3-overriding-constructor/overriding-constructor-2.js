class Animal {
	constructor(name) {
		this.speed = 0;
		this.name = name; 
	}

	// ...
}

class Rabbit extends Animal {
	constructor(name, earLength) {
		super(name); 
		this.earLength = earLenght;
	}

	// ...
}

// now fine 
let rabbit = new Rabbit("White Rabbit", 10); 
alert(rabbit.name); // White Rabbit 
alert(rabbit.earLength); // 10 

