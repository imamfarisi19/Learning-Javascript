let user = { 
	firstName: "John", 
	sayHi() { 
		alert(`Hello, ${this.firstName}!`); 
	} 
}; 


//setTimeout(user.sayHi, 1000); // Hello, undefined! 

let f = user.sayHi; 
setTimeout(f, 1000); // lost user context 

