for (let i = 0; i < 3; i++) {
  // the variable i is only visible inisde this for alert(i); 
  alert(i); // 0, then 1, then 2 
}

alert(i); // Error, no such variable 

