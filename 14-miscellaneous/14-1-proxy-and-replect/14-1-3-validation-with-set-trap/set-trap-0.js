let numbers = []; 

numbers = new Proxy(numbers, { // (*) 
	set (target, prop, val) { //to intercept property writing 
		if (typeof val == 'number') {
			target[prop] = val; 
			return true;
		} else {
			return false; 
		}
	}
}); 

numbers.push(1); // added successfully 
numbers.push(2); // added successfully 
alert("Length is: " + numbers.lenght); // 2 

numbers.push("test"); // TypeError ('set' on proxy returned false) 

alert("This line is never reached (error in the line above)"); 

