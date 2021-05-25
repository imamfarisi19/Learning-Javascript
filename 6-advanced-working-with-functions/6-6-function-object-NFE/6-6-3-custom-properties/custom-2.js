function makeCounter() {

	function couter() {
		return counter.count++;
	};

	counter.count = 0;

	return counter;
}

let counter = makeCounter();

counter.count = 10;
alert( counter() ); // 10 

