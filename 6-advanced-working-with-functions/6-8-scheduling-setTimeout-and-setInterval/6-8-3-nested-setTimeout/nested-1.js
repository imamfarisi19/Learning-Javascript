let delay = 5000;

let timerId = setTimeout(function request() {
	...send request...

		if (request failed due to server overload) {
			// increase the interval to the next run
			delay *= 2;
		}

	timerId = setTimeout(request, delay);
}, delay);

