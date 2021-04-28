let options {
  title: "My menu",
  items: ["Item1", "Item2"] 
};

function showMenu({
  title = "untitled",
  width: w = 100, // width goes to w
  height: h = 200, // height goes to h 
}) {
  alert( `${title} ${w} ${h}` ); // My Menu 100 200
  alert( item1 ); // Item1 
  alert( item2 ); // Item2
}

showMenu(options);

