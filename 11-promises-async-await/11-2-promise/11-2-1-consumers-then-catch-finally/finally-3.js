// the promise becomes resolved immediately upon creation 
let promise = new Promise(resolve => resolve("done!")); 

promise.then(alert); // done! (shows up right now)

