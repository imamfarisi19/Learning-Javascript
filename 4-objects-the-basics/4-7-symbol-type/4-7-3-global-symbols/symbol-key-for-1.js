let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name"); 

alert(Symbol.keyFor(globalSymbol)); // name, global symbol
alert(Symbol.keyFor(globalSymbol)); // undefined, not global

alert(localSymbol.description); // name 

