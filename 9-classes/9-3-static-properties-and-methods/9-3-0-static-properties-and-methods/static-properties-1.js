class User {  } 

User.staticMethod = function() {
	alert(this === User); 
};

User.staticMethod(); // true 

