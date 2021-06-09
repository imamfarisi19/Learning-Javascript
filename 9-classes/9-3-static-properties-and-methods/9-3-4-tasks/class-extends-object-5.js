class Rabbit {}

alert( Rabbit.prototype.__proto__ === Object.prototype ); // (1) true 
alert( Rabbit.__proto__ === Object ); // (2) false (1)
alert( Rabbit.__proto__ === Function.prototype ); // as any function by default 

// error, no such function in Rabbit 
alert( Rabbit.getOwnPropertyNames({a: 1, b: 2}) ); // Error 

