loadScript("/article/promise-chaining/one.js").then(script1 => {
	loadScript("/article/promise-chaining/two.js").then(script2 => {
		loadScript("/article/promise-chaining/three.js").then(script3 => {
			// this function has access to variables script1, script2 and script3
			one();
			two();
			three();
		});
	});
});

