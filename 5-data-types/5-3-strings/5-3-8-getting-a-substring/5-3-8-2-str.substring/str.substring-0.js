let str = "stringify"; 

// these are same for substring 
alert( str.substring(2, 6) );
alert( str.substring(6, 2) );

// ...but not for slice: 
alert( str.slice(2, 6) ); // "ring" (the same)
alert( str.slice(6, 2) ); // "" (an empty string) 

