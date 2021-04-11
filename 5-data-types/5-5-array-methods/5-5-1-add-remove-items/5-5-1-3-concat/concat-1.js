let arr = [1, 2]; 

let arraylike = {
  0: "something", 
  length: 1
};

alert( arr.concat(arrayLike) ); // 1, 2, [Object Object]

