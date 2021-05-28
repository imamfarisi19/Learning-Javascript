// Error: Invalid property descriptor. 
Object.defineProperty({}, 'prop', {
	get() {
		return 1 
	}, 

	value: 2
});

