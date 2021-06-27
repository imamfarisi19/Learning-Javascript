new Promise((resolve, reject) => {
	resolve("ok"); 
}).then((result) => {
	blabla(); // no such function 
}).catch(alert); // ReferenceError: blabla is not defined 

