let john = { name: "John" }; 

let map = new Map(); 
map.set(john, "..."); 

john = null; // overwrite the reference 

// john is stored inside the map, 
// we can get it by using map.keys() 

