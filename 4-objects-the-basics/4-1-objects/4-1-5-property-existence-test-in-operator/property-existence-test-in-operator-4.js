let obj = { 
  test: undefined 
}; 

alert( obj.test ); // it's undefined, so - no such property ? 
alert( "test" in obj ); // true, the property does exist! 

