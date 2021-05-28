let user = {	}; 

Object.defineProperty(user, "name", { 
	value: "John", 
	// for new properties we need to explicitly list what's true 
	enumerable: true, 
	configurable: true 
}); 

alert(user.name); // John 
user.name = "Pete"; // Error 

