let user = null;
let x = 0;

user?.sayHi(x++); // no "sayHi", so the excution doesn't reach x++

alert(x); // 0, value not incremented 

