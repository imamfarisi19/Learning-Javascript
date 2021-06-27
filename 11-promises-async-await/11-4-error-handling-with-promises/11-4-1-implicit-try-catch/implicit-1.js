new Promise((resolve, reject) => {
	reject(new Error("Whoops!"));
}).catch(alert); // Error: Whoops! 

