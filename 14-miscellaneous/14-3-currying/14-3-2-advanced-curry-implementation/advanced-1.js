function sum(a, b, c) {
	return a + b + c;
}

let curriedSum = curry(sum); 

alert( curriedSum(1, 2, 3) ); // 6, still callable normally 
alert( curriedSum(1)(2,3) ); // 6, curryig of 1st arg 
alert( curriedSum(1)(2)(3) ); // 6, full currying 

