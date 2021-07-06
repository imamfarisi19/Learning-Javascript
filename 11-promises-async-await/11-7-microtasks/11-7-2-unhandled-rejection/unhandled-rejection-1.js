let promise = Promise.reject(new Error("Promise Failed!")); 

// Promise Failed! 
window.addEventListener('unhandlerejection', event => alert(event,reason)); 

