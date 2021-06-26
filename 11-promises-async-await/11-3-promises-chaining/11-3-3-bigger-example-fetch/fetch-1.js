fetch('/article/promise-chaining/user.json')
	// .then below runs when the remote server responds 
	.then(function(response) {
		// response.text() returns a new promise that resolve with the full response text 
		// when it loads
		return response.text();
	})
	.then(function(text) {
		// ...and here's the content of the remote file 
		alert(text); // {"name": "iliakan", "isAdmin": true} 
	}); 

