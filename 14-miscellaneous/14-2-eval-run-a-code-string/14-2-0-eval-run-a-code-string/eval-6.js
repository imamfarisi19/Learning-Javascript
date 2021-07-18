// reminder: 'user strict' is enabled in runnable examples by default 

eval("let  x = 5; function f() {}"); 

alert(typeof x); // undefined (no such variable) 
// function f is also not visible 

