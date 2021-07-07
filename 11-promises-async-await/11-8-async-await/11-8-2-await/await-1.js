async function f() {
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve("done!"), 1000) 
	}); 

	let result = await promise; // wait untill the promise resolve (*) 

	alert(result); // "done!" 
}

f(); 

