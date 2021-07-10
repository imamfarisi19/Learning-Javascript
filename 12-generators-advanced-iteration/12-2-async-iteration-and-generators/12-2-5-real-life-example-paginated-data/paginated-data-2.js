(async () => {

	let count = 0; 

	for await (const commit of getchCommits('javascript-tutorial.info')) {

		console.log(commit.author.login);

		if (++count == 100) { // let's stop at 100 commits 
			break; 
		}
	}
})(); 

// Note: if you are running this in an external sandbox, you'll need to paste here the function fetchCommits described above 

