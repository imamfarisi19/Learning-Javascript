function loadScript(src){
	// creates a <script> tag and appeand it to the page 
	// this causes the script with given src to start loading and run when complete 
	let script = document.createElement('script'); 
	script.src = src;
	document.head.appeand(script);  
}

