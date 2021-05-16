function f() {
  let value = 123;

  return function() {
    alert(value);
  }
}

let g = f(); // while g function exists, the value stays in memeory

g = null; // ...and now the memory is cleaned up 

