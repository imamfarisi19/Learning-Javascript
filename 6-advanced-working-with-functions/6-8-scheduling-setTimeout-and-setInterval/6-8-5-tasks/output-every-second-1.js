function printNumbers(from, to) { 
	let current = from; 

	setTimeout(function go() { 
		alert(current); 
		if (current < to) { 
			setTimeout(go, 1000); 
		} 
		current++; 
	}, 1000); 
} 

// usage: 
printNumbers(5, 10); 

