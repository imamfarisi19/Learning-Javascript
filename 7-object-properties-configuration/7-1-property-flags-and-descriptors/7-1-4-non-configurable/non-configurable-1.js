let user = {
	name: "John"
}; 

Object.defineProperty(user, "name", {
	configurable: false
});

user.name = "Pete"; // works fine 
delete user.name; // Error 

