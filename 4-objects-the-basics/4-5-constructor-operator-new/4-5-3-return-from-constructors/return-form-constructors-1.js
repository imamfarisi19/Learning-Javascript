function BigUser() {

  this.name = "John"; 

  return { name: "Godzilla" }; // <-- returns this object
}

alert( new BigUser().name ); // Godzilla, got the object

