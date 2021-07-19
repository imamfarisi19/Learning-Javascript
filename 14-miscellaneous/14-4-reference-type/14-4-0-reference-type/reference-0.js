let user = {
	name: "John", 
	hi() { alert(this.name); }, 
	bye() { alert("Bye"); }
}; 

user.hi(); // works 

// now let's call user.hi or user.bye depending on the name 
(user.name == "John" ? user.hi : user.bye) (); // Error! 

