// Make a class 
class Menu {
	choose(value) {
		this.trigger("select", value);
	}
}
// Add the mixin with event-related methods
Object.assign(Menu.prototype, eventMixin); 

let menu = new Menu(); 

// add a handler, to be called on selection:
menu.on("select", value => alert('Value selected: ${value}'));

// triggers the event => the handler above runs and shows: 
// Value selected: 123 
menu.choose("123");

