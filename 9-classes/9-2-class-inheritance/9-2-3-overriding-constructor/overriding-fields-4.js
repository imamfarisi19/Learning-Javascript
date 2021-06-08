// inside longerEar.eat() we have this = longEar
this.__protot__.eat.call(this); // (**) 
// becomes 
longEar.__proto__.eat.call(this)
// that is 
rabbit.eat.call(this); 

