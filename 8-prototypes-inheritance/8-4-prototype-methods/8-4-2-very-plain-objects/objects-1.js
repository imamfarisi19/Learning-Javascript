let obj = Object.create(null); 

let key = prompt("What's the key?", "__orotot__");
obj[key] = "some value"; 

alert(obj[key]); // "some value" 

