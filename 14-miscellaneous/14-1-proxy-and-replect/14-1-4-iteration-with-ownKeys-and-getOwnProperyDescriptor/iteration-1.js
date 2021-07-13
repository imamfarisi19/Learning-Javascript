let user = {  }; 

user = new Proxy(user, {
	ownKeys(target) {
		return ['a', 'b', 'c'];
	}
});

alert( Object.keys(user) ); // <empty> 

