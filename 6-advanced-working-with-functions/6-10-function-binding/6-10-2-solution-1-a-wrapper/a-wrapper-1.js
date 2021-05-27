let user = { 
	firstName: "John", 
	sayHi() { 
		alert(`Hello, ${this.firstName}!`); 
	} 
}; 

setTimeout(() => user.sayHi(), 1000); 

// ...the value of user changes within 1 second
user = {
	sayHi() { alert("Author user in setTimeout!"); }
};

// Another user in setTimeout!

