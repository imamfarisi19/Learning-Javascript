function makeObservable(target) {
	/* your code */ 
}

let user = {}; 
user = makeObservable(user); 

user.observe((key, value) => {
	alert(`SET ${key}=${value}`);
}); 

user.name = "John"; // alert: SET name=John 

