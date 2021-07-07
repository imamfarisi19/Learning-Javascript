async function f() {
	try {
		let response = await fetch('https://no-such-url');
	} catch {
		alert(err); // TypeError: failed to fetch
	}
}

f(); 

