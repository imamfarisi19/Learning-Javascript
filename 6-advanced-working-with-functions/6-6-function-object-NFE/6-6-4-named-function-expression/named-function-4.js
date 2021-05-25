let sayHi = function(who) {
	if(who){
		alert(`Hello, ${who}`);
	} else {
		sayHi("Guest");
	}
};

