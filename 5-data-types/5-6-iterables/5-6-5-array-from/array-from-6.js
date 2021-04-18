function slice(str, start, end) {
  return Array.from(str).slice(start, end).join('');
}

let str = '𝒳😂𩷶'; 

alert( slice(str, 1, 3) ); // 😂𩷶 

// the native method does not support surrogate pairs 
alert( str.slice(1, 3) ); // garbage (two pieces from different surrogate pairs)

