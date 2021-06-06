function f() {}

alert(f.__protot__ == Function.prototype); // true 
alert(f.__proto__.__proto__ == Object.prototype); // true 

