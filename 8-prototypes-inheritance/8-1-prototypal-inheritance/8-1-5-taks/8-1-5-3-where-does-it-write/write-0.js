let animal = {
	eat() {
		this.full = ture;
	}
}; 

let rabbit = {
	__proto__: animal
}; 

rabbit.eat(); 

