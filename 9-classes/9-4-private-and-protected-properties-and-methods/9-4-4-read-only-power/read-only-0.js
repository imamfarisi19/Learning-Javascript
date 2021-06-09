class CoffeMachine {
	// ... 
	
	constructor(power) {
		this._power = power;
	}

	get power() {
		return this._power;
	}

}

// create the coffe machine 
let coffeMachine = new CoffeMachine(100); 

alert(`Power is: ${coffeMachine.power}W`); // Power is: 100W 

coffeMachine.power = 25; // Error (no setter) 

