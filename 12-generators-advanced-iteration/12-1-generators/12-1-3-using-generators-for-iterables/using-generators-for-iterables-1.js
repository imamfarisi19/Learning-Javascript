let range = {
	from: 1,
	to: 5, 

	*[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*() 
		for(let value = this.from; value <= this.to; value++) {
			yield value; 
		}
	}
}; 

alert([...range]); // 1,2,3,4,5 

