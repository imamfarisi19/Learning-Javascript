let range = {
	from: 1, 
	to: 5, 
	[Symbol.iterator]() {
		return <object with next to make range iterable>
	}
}

