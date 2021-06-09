class CoffeMachine {
	_waterAmount = 0; 

	setWaterAmount(value) {
		if (value < 0) value = 0;
		this._waterAmount = value; 
	}

	getWaterAmount() {
		return this._waterAmount;
	}
}

new CoffeMachine().setWaterAmount(100); 

