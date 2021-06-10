class MegaCoffeMachine extends CoffeMachine {
	method() {
		alert( this.#waterAmount ); // Error: can only access from CoffeMachine 
	}
}

