let hamster = {
	stomatch: [], 

	eat(food) {
		this.stomach.push(food);
	}
};

let speedy = {
	__proto__: hamster
};

let lazy = {
	__proto__: hamster
}; 

// This one found the food 
speedy.eat("apple"); 
alert( speedy.stomatch ); // apple 

// This one also has it, why? fix please. 
alert( lazy.stomatch ); // apple 

