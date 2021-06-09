class User { 
	static staticMethod() { 
		alert(this === User); 
	} 
} 

User.staticMethod(); // true 

