let value = "Suprise!";

function f() {
  let value = "the closet value";

  function g() {
    debugger; // in console: type alert(value); Suprise!
  }

  return g;
}

let g = f();
g();

