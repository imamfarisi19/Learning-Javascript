let f =_.debounce(alert, 1000); 

f("a"); 
setTimeout( () => f("b"), 200); 
setTimeout( () => f("c"), 500); 
// debounce function waits 1000ms after the last call and then runs: alert("c")

