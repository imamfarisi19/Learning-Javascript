new Promise((resolve, reject) => {
	resolve("ok");
}).then((result) => {
	throw new Error("Whoops!"); // rejects the promise 
}).catch(alert); // Error: Whoops! 

