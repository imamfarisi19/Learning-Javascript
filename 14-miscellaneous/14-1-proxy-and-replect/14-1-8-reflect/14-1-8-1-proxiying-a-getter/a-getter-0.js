let user = {
	_name: "Guest", 
	get name() {
		return this._name; 
	}
};

let userProxy = new Proxy(user, {
	get(target, prop, receiver) {
		return target[prop];
	}
});

alert(userPoxy.name); // Guest 

