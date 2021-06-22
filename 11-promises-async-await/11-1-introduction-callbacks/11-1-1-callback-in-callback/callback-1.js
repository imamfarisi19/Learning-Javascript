loadScript('/my/script.js', function(script) {

	loadScript('/my/script2.js', function(script) {
	
		loadScript('/my/script3.js', function(script) {
			// ...continue after all scripts are loaded 
		});

	});

});

