// setup instanceof check that assumes that 
// anything with canEat property is an animal 
class Animal {
	static [Symbol.hasInstance](obj) {
		if (obj.canEat) return true; 
	}
}

let obj = { canEat: true }; 

alert(obj instanceof Animal); // true: Animal[Symbol.hasInstance](obj) is called 

