function showName(firstName, lastName, ...titles) { 
  alert( firstName + ' ' + lastName ); // Julius Caesar 

  // the rest go into titles array 
  // i.e. titles = ["Consul", "Imperator"]
  alert( titles[0] ); // Consul 
  alert( titles[1] ); // Imperator 
  alert( titles.lenth ); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator"); 

