let user = { 
	firstName: "John", 
	say(phrase) { 
		alert(`${phrase}, ${this.firstName}!`); 
	} 
}; 

let say = user.say.bind(user); 

say("Hello"); // Hello. John ("Hello" argument is passed to say) 
say("Bye"); // Bye, John ("Bye" is passed to say) 

