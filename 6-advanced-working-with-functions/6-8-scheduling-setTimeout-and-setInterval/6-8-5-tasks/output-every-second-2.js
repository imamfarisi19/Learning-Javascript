function printNumber(from, to) {
	let current = from;

	function go() {
		alert(current);
		if (current == to) {
			clearInterval(timerId);
		}
		current++;
	}

	go();
	let timerId = setInterval(go, 1000); 
}

printNumber(5, 10); 

