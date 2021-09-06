document.body.sayTagName = function() {
	alert(this.tagName); 
}; 

document.body.sayTagName(); // BODY (the value of "this" in the method is document.body)

