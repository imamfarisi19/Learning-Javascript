new Promise((resolve, reject) => {
	throw new Error("error");
})
	.finally(() => alert("Promise ready"))
	.catch(err => alert(err)); // <-- .catch handles the error object 

