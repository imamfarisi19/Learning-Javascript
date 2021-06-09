class Rabbit extends Object {
	constructor(name) {
		this.name = name; 
	} 
} 

let rabbit = new Rabbit("Rab");

alert( rabbit.hasOwnProperty('name') ); // Error 
// Inherit from Animal
 21 class Rabbit extends Animal {
 22     hide() {
 23         alert(`${this.name} hides!`);
 24     }
 25 }

