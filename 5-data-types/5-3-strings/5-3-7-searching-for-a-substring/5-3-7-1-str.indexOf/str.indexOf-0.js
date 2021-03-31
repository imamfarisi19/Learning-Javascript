let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the begining 
alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

alert( str.indexOf('id') ); // 1, "id" is found at the position 1 (..idget with id) 

