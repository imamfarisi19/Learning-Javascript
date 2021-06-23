let promise = new Promise((resolve, reject) => { 
	setTimeout(() => rejet(new Error("Whoops!")), 1000); 
}); 

// .catch(f) is the same as promise.then(null, f)
promise.catch(alert); // shows "Error: Whoops!" after 1 second 

