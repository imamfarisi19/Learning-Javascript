new Promise((resolve, reject) => {
	/* do something that takes time, and then call resolve/reject */
})
	// runs when the promise is settled, doesn't matter successfully or not 
	.finally(() => stop loading indicator)
	// so the loading indicator is always stopped before we process the result/error 
	.then(result => show result, err => show error) 

