let user = {
	name: "John"
}; 

function wrap(target) {
	return new Proxy(target, {
		/* your code */
	}); 
}

user = wrap(user); 

alert(user.name); // John 
alert(user.age); // ReferenceError: Property doesn't exist: "age" 

