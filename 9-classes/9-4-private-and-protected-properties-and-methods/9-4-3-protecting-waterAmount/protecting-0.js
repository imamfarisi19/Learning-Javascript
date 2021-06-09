class CoffeMachine {
	waterAmount = 0; // the amount of water inside 

	constructor(power) {
		this.power = power;
		alert( `Created a coffe-machine, power: ${power}` );
	}

}

// create the coffe machine 
let coffeMachine = new CoffeMachine(100); 

// add water 
coffeMachine.waterAmount = 200; 

