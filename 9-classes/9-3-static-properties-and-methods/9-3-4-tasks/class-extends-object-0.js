class Rabbit {
	constructor(name) {
		this.name = name; 
	}
}

let rabbit = new Rabbit("Rab"); 

// hasOwnProperty method is from Object.prototype 
alert( rabbit.hasOwnProperty('name') ); // true 

