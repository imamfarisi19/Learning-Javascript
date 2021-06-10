try {
	JSON.parse("{ bad json o_0 }"); 
} catch (err) {
	alert(err.name); // SyntaxError
	alert(err.message); // Unexpected token b in JSON at position 2 
}
