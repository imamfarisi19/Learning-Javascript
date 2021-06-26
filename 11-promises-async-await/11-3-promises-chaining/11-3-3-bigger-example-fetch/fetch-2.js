// same as above, but response.json() parses the remote content as JSON 
fetch('/article/promise-chaining/user.json') 
	.then(response -> response.json()) 
	.then(user -> alert(user.name)); // iliakan, got user name 

