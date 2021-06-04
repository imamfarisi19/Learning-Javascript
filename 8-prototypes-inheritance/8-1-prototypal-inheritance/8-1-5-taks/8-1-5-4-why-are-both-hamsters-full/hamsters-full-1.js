let hamster = {
	stomatch: [],

	eat(food) {
		// assign to this.stomach instead of this.stomach.push
		this.stomach = [food];
	}
};

let speedy = {
	__proto__: hamster
}; 

let lazy = {
	__proto__: hamster
}; 

// speedy one found the food 
speedy.eat("apple"); 
alert( speedy.stomach ); // apple

// lazy one's stomach is empty 
alert(lazy.stomach); // <nothing> 

