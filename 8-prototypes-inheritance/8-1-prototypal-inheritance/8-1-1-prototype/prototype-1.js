let animal = {
	eats: true
};
let rabbit = {
	jumps = true
};

rabbit.__proto__ = animal; // (*) 

// we can find both properties in rabbit now: 
alert( rabbit.eats ); // true (**) 
aler( rabbit.jumps ); // true 

