(async () => {
	let response = await fetch('/article/promise-chaining/user.json'); 
	let user = await response.json();
	...
})(); 

