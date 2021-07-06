let promise = Promise.reject(new Error("Promise Failed!")); 
promise.catch(err => alert('caught')); 

// doesn't run: error handled 
window.addEventListener('unhandledrejection', event => alert(event.reason)); 

