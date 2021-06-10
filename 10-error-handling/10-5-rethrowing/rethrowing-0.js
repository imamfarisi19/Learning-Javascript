let json = '{ "age": 30 }'; // incomplete data 

try {
	user = JSON.parse(json); // <-- forgot to put "let" before user 

	// ... 
} catch (err) {
	alert("JSON Error: " + err); // JSON Error: ReferencedError: user is not defined 
	// (no JSON Error actually)
}

