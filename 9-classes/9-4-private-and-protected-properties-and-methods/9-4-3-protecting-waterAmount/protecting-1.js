class CoffeMachine {
	_waterAmount = 0;

	set waterAmount(value) {
		if (value < 0) {
			value = 0;
		}
		this._waterAmount = value;
	}

	get waterAmount() {
		return this._waterAmount;
	}

	constructor(power) {
		this._power = power;
	}

}

// create the coffe machine 
let coffeMachine = new CoffeMachine(100);

// add water 
coffeMachine.waterAmount = -10; // Error: Negative water 

