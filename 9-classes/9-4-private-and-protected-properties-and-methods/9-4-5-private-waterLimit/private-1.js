class CoffeMachine { 
	#waterAmount = 0; 

	get waterAmount() { 
		return this.#waterAmount; 
	} 

	set waterAmount(value) {
		if (value < 0) value = 0;
		this.#waterAmount = value; 
	} 
} 

let machine = new CoffeMachine(); 

machine.waterAmount = 100; 
alert(machine.#waterAmount); // Error 

