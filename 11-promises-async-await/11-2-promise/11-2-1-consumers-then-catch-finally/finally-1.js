new Promise((resolve, reject) => { 
	setTimeout(() => resolve("result"), 2000) 
}) 
	.finally(() => alert("Promise ready")) 
	.then(result => alert(result)); // <-- .then handles the result 

