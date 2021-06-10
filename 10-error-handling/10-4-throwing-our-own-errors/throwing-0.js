let json = '{ "age": 30 }'; // inomplete data 

try {

	let user = JSON.parse(json); // <-- no errors
	alert( user.name ); // no name!
} catch (err) {
	alert( "doesn't execute" );
}

