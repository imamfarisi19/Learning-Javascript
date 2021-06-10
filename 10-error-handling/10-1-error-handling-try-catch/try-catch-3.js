try {
	setTimeout(function() {
		noSuchVariable; // script will die here 
	}, 1000); 
} catch (err) {
	alert( "won't work" );
}

