let names = 'Bilbo, Gandalf, Nazgul'; 

let arr = names.split(', '); 

for (let name of arr) {
  alert( `A meesage to ${name}.` ); // A message to Bilbo (and other names) 
}

