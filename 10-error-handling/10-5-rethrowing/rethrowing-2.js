let json = '{ "age": 30 }'; // incomplete data 
try {
	let user = JSON.parse(json); 

	if (!user.name) {
		throw new SyntaxError("Incomplete data: no name"); 
	}

	blabla(); // unexpected error 

	alert( user.name );

} catch (err) {

	if (err instanceof SyntaxError) {
		alert( "JSON Error: " + err.message ); 
	} else {
		throw err; // rethrow(*) 
	}

}

