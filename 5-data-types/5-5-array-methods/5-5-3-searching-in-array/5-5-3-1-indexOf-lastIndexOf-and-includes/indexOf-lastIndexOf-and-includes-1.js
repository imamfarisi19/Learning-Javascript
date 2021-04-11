const arr = [NaN]; 
alert( arr.indexOf(NaN) ); // -1 (should be 0, but === equality doesn't work for NaN) 
alert( arr.includes(NaN) ); // true (correct) 

