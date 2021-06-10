function Rabbit() {} 
	let rabbit = new Rabbit(); 
	
	// changed the prototype
	Rabbit.prototype = {}; 

	// ...not a rabbit any more! 
	alert( rabbit instanceof Rabbit ); // false 

