let john = { name: "John" }; 

let array = [ john ]; 

john = null; // overwrite the reference 

// the object previously referenced by john is stored inside the array 
// therefore it won't be garbage collection 
// we can get it as array[0] 

