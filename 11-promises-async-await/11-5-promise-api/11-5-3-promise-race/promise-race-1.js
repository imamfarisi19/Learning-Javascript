Promise.race([
	new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
	new Promise((resolve, reject) => setTimeout(() => resolve(new Error("Whoops!")), 2000)),
	new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1 

