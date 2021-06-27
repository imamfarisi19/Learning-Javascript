fetch('https://no-such-server.blabla') // rejects 
	.then(response => response.json());
	.then(err => alert(err)) // TypeError: failed to fetch (the text may vary) 

