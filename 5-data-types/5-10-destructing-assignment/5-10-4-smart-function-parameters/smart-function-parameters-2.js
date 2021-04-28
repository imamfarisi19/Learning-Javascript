// we pass object to function 
let options = { 
  title: "My menu", 
  items: ["Item1", "Items2"] 
}; 

// ...and it immediately expands it to variables
function showMenu({title = "untitled", width = 200, height = 100, items = []}) {
  // title, items - taken from options, 
  // width, height - default used 
  alert( `${title} ${width} ${height}` ); // My Menu 200 100
  alert(items); // Item1, Item2
}

showMenu(options); 

