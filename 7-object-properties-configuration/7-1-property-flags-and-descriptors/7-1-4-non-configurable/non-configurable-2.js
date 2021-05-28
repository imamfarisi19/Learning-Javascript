let user = {
	name: "John"
};

Object.defineProperty(user, "name", {
	writable: false,
	configurable: false
}); 

// won't be able to change user.name or its flags
// all this won't work:
user.name = "Pete";
delete user.name;
Object.defineProperty(user, "name", { value: "Pete" }); 

