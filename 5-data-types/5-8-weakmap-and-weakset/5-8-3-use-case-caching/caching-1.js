let cache = new WeakMap(); 

// calculate and remember the result 
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* calculate the result for */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj); 
}

