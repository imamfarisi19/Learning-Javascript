function sum(a, b) {
	return a + b; 
}

let curriedSum = _.curry(sum); // using _.curry from loadash library 

alert( curriedSum(1, 2) ); // 3, still callable normally 
alert( curriedSum(1)(2) ); // 3, called partially 

