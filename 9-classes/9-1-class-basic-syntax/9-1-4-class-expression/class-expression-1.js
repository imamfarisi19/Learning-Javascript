// "Named Class Expression" 
// (no suxh term in the spec, but that's similar to Named Function Expression) 
let User = class MyClass { 
	sayHi() { 
		alert(MyClass); // MyClass name is visible only inside the class 
	} 
}; 

new User().sayHi(); // works, shows MyClass definition 

alert(MyClass); // error, MyClass name isn't visible outside of the class 

