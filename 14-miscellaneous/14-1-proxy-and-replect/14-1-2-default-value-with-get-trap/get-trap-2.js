let dictionary = {
	'Hello': 'Hola',
	'Bye': 'Adios'
}; 

dictionary = new Proxy(dictionary, {
	get(target, phrase) { // intercepts reading a property from dictionary 
		if (phrase in target) { // if we have it in the dictionary
			return target[phrase]; // return the translation 
		} else {
			// otherwise, return the non-translated phrase 
			return phrase;
		}
	}
}); 

// Look up arbitrary phrase in the dictionary! 
// At worst, they're not translated. 
alert( dictionary['Hello'] ); // Hola 
alert( dictionary['Welcome to Proxy'] ); // Welcome to Proxy (no translation) 

