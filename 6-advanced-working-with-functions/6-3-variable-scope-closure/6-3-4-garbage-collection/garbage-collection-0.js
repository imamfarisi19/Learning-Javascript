function f() {
  let value = 123;

  return function() {
    alert(value);
  }
}

let g = f(); // g.[[Environtment]] stores a reference to the Lexical Environment 
// of the corresponding f() call

