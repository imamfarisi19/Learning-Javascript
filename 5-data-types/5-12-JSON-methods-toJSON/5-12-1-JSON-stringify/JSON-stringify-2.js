let user = {
  sayHi() { // ignored 
    alert("Hello"); 
  },
  [Symbol("id")]; 123, // ignored
  something: undefined // ignored
};

alert( JSON.stringify(user) ); // {} (empty object)

