let array = [1, 2, 3]; 

array = new Proxy(array, {
	/* your code */
}); 

alert( array[-1] ); // 3 
alert( array[-2] ); // 2 

