function mul (a, b) { 
	return a * b; 
} 

let triple = mul.bind(null, 3); 

alert( triple(3) ); // = mul(3, 3) = 9 
alert( triple(4) ); // = mul(3, 4) = 12 
alert( triple(5) ); // = mul(3, 5) = 15 

