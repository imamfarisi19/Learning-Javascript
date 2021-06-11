window.onerror = function()message, url, line, col, error) {
	alert(`${message}\n At ${line}:${col} or ${url}`);
};

function readData() {
	badFunc(); // Whoops, something wrong! 
} 

readData();

