let user = {
	[Symbol.toStringTag]: "User"
}; 

alert( {}.toString.call(user) ); // [object User] 

