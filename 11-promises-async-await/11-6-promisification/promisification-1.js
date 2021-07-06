let loadScriptPromise = function(src) { 
	return new Promise((resolve, reject) => { 
		loadScript(src, (err, script) => { 
			if (err) reject(err); 
			else resolve(script); 
		});
	});
};

// usage: 
// loadScriptPromise('path/script.js').then(...) 

