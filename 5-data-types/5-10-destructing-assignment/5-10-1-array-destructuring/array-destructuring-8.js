let guest = "Jane"; 
let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane 
[guest, admin] = [admin, guest]; 

alert(`${guest} ${admin}`); // Pete Jane (successfully swapped!)

