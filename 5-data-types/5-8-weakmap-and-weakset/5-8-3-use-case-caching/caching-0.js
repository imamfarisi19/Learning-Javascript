let cache = new Map(); 

// calculate and remember the result 
function process(obj) { 
  if (!cache.has(obj)) { 
    let result = /* calculations of the result for */ obj; 

    cache.set(obj, result);
  } 
  return cache.get(obj); 
} 

// Now we use process() in another file: 

