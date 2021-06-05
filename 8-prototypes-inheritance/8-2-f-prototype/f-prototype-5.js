function Rabbit() {}
Rabbit.prototype = {
	jumps: true
}; 

let rabbit = new Rabbit();
alert(rabbit.constructor === Rabbit); // false 

