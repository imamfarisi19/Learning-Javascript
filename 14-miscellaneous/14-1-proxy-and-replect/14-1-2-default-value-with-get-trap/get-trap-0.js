let numbers = [0, 1, 2]; 

numbers = new Proxy(numbers, {
	get(target, prop) {
		if (prop in target) {
			return target[prop]; 
		} else {
			return 0; // default value 
		}
	}
}); 

alert( numbers[1] ); // 1 
alert( numbers[123] ); // 0 (no such item) 

