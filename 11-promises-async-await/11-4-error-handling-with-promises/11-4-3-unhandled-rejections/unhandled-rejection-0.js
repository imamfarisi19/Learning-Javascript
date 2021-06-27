new Promise(function() {
	noSuchFunction(); // Error here (no such function) 
}) 
	.then(() => {
		// successful promise handlers, one or more 
	}); // without .catch at the end! 

