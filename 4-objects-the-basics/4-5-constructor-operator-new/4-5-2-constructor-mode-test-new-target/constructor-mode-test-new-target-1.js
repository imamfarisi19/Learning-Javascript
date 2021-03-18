function User(name) {
  if (!new.target) { // if you ren me without new
    return new User(name); // ...I will add new for you
  }

  this.name = name;
}

let john = User("John"); // redirects call to new User 
alert(john.name); // John 

