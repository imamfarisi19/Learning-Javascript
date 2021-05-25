function sayHi() {
	alert("Hi");

	// let's count how many times we run 
	sayHi.counter++; 
}
sayHi.counter = 0; // initial value

sayHi(); // Hi
sayHi(); // Hi 

alert( `called {sayHi.counter} times` ); // called 2 times 

