function f(a, b) {
	alert( a + b );
}

f.defer(1000)(1, 2); // shows 3 after 1 second 

