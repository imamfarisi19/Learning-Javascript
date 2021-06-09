class Animal {}
class Rabbit extends Animal {}

// for statics
alert(Rabbit.__proto__ === Animal); // true 

// for regular methods 
alert(Rabbit.prototype.__proto__ === Animal.prototype); // ture 

