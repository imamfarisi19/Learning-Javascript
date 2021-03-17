function makeUser() {
  return this; // this time there's no object literal
}

aler ( makeUser().name ); // Error: Cannot property 'name' of undefined

