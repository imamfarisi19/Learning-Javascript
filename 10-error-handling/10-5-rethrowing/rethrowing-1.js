try { 
	user = { /*...*/ }; 
} catch (err) { 
	if (err instanceof ReferenceError) { 
		alert('ReferenceError'); // "ReferenceError" for accessing an undefined variable 
	} 
} 

