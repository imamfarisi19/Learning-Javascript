let s1 = 'S\u0307\u0323'; // Ṩ, S + dot above + dot below
let s2 = 'S\u0323\u0307'; // Ṩ, S + dot below + dot above\

alert( `s1: ${s1}, s2: ${s2}` );

alert(s1 == s2); // false though the characters look identical (?!)

