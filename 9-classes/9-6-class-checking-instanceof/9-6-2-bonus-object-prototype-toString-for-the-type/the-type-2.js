let s = Object.prototype.toString;

alert( s.call(123) ); // [object Number]
alert( s.call(null) ); // [object Null] 
alert( s.call(alert) ); // [object Function] 

