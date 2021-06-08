
// inside rabbit.ear() we also have this = longEar 
this.__proto__.eat.call(this) // (*) 
// becomes 
longEar.__proto__.eat.call(this); 
// or (again) 
rabbit.eat.call(this); 

