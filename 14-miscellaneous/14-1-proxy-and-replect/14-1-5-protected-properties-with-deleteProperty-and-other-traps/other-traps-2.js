get(target, prop) {
	// ...
	let value = target[prop]
	return (typeof value === 'function') ? value.bind(target) : value; // (*)
}
