class CoffeMachine {
	#waterLimit = 200;

	#fixWaterAmount(value) {
		if (value < 0) return 0;
		if (value > this.#waterLimit) return this.#waterLimit;
	}

	setWaterAmount(value) {
		this.#waterLimit = this.#fixWaterAmount(value); 
	}

}

let coffeMachine = new CoffeMachine(); 

// can't access privates from outside of the class 
coffeMachine.#fixWaterAmount(123); // Error
coffeMachine.#waterLimit = 1000 // Error 

