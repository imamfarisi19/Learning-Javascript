let user = {
	name: "John",
	hi() { alert(this.name); }
}

// split getting and calling the method in two lines 
let hi = user.hi;
hi(); // Error, because this is undefiend 

