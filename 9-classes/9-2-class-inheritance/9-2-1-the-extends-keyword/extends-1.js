class Rabbit extends Animal {
	hide() {
		alert(`${this.name} hides!`);
	}
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides! 

