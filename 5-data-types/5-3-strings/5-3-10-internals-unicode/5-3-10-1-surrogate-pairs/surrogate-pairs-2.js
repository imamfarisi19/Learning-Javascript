// charCodeAt is not surrogate-pair aware, so it gives codes for parts 

alert( '¿'.charCodeAt(0).toString(16) ); // d835, between 0xd800 and 0xdbff 
alert( '¿'.charCodeAt(1).toString(16) ); // dcb3, between 0xdc00 and 0xdfff

