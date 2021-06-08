let animal = {
	name: "Animal",
	eat() {
		alert(`${this.name} eats.`);
	}
};

let rabbit = {
	__proto__: animal,
	eat() {
		// ...bounce around rabbit-style and call parent (animal) method 
		this.__proto__.eat.call(this); // (*)
	}
}; 

let longEar = {
	__proto__: rabbitm
	eat() {
		// ...do something with long ears and call parent (rabbit) method 
		this.__proto__.eat.call(this); // (**)
	}
}; 

longEar.eat(); // Error: Maximum call stack size exceeded 

