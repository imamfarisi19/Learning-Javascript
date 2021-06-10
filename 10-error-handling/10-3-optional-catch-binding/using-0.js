let json = '{"name":"John", "age": 30}'; // data from the server 

try {
	let user = JSON.parse(json); // <-- when an error occurs... 
	alert( user.name ); // doesn't work 
} catch (err) {
	// ...the execution jumps here 
	alert( "Our apologies, the data has errors, we'll try to request it one more time." );
	alert( err.name );
	alert( err.message );
}

