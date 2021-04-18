let str = '𝒳😂'; 

let chars = []; // Array.from internally does the same loop 
for (let char of str) { 
  chars.push(char); 
} 

alert(chars); 

