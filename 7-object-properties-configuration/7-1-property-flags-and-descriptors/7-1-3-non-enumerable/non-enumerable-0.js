let user = {
	name: "John", 
	toString() {
		return this.name; 
	}
}; 

// By default, both our properties are listed; 
for (let key in user) alert(key); // name, toString 

