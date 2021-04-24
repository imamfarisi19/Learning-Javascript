let user = new Map();
user.set("name", "John");
user.set("age", "30");

// Map iterates as [key, value] pairs, very convenient for destructuring 
for (let [key, value] of user) {
  alert(`${key}:${value}`); // name:John, then age:30
}

