class Animal {
	showName() {	// instead of this.name = 'animal'
		alert('animal'); 
	}

	constructor() {
		this.showName();	// instead of alert(this.name);
	}
}

class Rabbit extends Animal {
	showName() {
		alert('rabbit');
	}
}

new Animal(); // animal 
new Rabbit(); // rabbit
