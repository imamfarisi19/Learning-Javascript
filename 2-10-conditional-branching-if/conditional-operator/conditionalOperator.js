let accesAllowed;
let age = prompt('How old are you?','');

if(age > 18) {
  accesAllowed = true;
} else {
  accesAllowed = false;
}

alert(accesAllowed);
