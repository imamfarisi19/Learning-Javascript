let animal = {
	name: "Animal", 
	eat() {
		alert(`${this.name} eats.`); 
	}
}; 

let rabbit = {
	__proto__: animal, 
	name: "Rabbit",
	eat() {
		// that's how super.eat() could presumably work
		this.__proto__.eat.call(this); // (*)
	}
}; 

rabbit.eat(); // Rabbit eats. 

