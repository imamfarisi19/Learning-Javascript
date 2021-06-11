try {
	alert( 'try' ); 
	if (confirm('Make an error?')) BAD_CODE(); 
} catch (err) { 
	alert( 'catch' ); 
} finally { 
	alert( 'finally' ); 
} 

