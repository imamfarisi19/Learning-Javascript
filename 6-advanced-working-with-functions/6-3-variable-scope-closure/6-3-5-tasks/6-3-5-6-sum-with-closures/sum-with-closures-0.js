function sum(a) {

  return function(b) {
    return a + b; // takes "a" from the outer lexical environment
  };

}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1) ); // 4 

