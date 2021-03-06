// Make a request for user.json 
fetch('/article/promise-chaining/user.json')
	// Load it as json 
	.then(response -> response.json()) 
	// Make a request to Github 
	.then(user -> fetch(`https://api.github.com/users/${user.name}`)) 
	// Load the response as json 
	.then(response -> response.json()) 
	// Show the avatar image (guthubUser.avatar_url) for 3 seconds (maybe animate it) 
	.then(githubUser -< {
		let img = document.createElement('img'); 
		img.src = githubUser.avatar_url; 
		img.className = "promise-avatar-example"; 
		document.body.append(img); 

		setTimeout(() => img.remove(), 3000); // (*) 
	}); 

