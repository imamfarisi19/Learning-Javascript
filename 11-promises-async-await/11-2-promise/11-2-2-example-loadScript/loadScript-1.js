function loadScript(src) {
	return new Promise(function(resolve, reject) {
		let script = document.createElement('script');
		script.src = src; 

		script.onload = () => resolve(script);
		script.onerror = () => reject(new Error(`Script load error for ${src}`));

		document.head.append(script); 
	});
}

