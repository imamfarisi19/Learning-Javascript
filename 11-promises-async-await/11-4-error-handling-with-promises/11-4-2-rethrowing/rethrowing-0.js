// the execution: catch -> then 
new Promise((resolve, reject) => { 

	throw new Error("Whoops!"); 

}).catch(function(error) { 

	alert("The error is handled, continue normally"); 

}).then(() => alert("Next successful handler runs")); 

