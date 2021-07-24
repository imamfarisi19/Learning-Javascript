// Define HTMLInputElement 
// The colon ":" means that HTMLInputElement inherits from HTMLElement 
interface HTMLInputElement: HTMLElement {
	// here go properties and methods of <input> elements
	
	// "DOMString" means that the value of a property is a string
	attribute DOMString accept;
	attribute DOMString alt; 
	attribute DOMString autocomplete; 
	attribute DOMString value; 

	// boolean value property (true/false)
	attribute boolean autofocus; 
	...
	// now the method: "void" means that the method returns no value 
	void select(); 
	...
}
