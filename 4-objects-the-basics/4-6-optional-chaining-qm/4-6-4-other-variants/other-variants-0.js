let userAdmin = { 
  admin() { 
    alert("I am admin"); 
  } 
}; 

let userGuest = {}; 

userAdmin.admin?.(); // I am admin 

userGuest.admin?.(); // nothing (no such method) 

