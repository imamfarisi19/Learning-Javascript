class Rabbit extends Object {}

alert( Rabbit.prototype.__proto__ === Object.prototype ); // (1) true 
alert( Rabbit.__proto__ === Object ); // (2) true 

