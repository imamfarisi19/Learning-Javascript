let arr = [1, 2, 3, 4, 5]; 

// removed initial value from reduce (no 0) 
let result = arr.reduce((sum, current) => sum + current); 

alert(result); // 15 

