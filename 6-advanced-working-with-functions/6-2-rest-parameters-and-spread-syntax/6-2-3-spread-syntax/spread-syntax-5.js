let arr = [3, 5, 1]; 
let arr2 = [8, 9, 15]; 

let merged = [0, ...arr, 2, ...arr2]; 

alert(merged); // // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)
