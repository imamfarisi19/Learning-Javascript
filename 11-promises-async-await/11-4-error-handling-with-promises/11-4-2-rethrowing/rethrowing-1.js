// the execution: catch -> catch 
new Promise((resolve, reject) => {

	throw new Error("Whoops!"); 

}).catch(function(error) { // (*) 
	
	if (error instanceof URIError) {
		// handle it 
	} else {
		alert("Can't handle such error"); 

		throw error; // throwing this or another error jumps to the next catch 
	}
}).then(function() {
	/* doesn't run here */
}).catch(error => { // (**) 

	alert(`The unknown error has occured: ${error}`); 
	// don't return anything => execution goes the normal way 

}); 

