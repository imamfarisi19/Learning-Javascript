let user = {  }; 

user = new Proxy(user, {
	ownKeys(target) { // called once to get a list of properties 
		return ['a', 'b', 'c'];
	},

	getOwnPropertyDescriptor(target, prop) { // called for every property 
		return {
			enumerable: true, 
			configurable: true 
			/* ...other flags, probable "value:..." */
		};	
	}
	
});

alert( Object.keys(user) ); // a, b, c 

