let obj = {/* some object */}; 

let result1 = process(obj);
let result2 = process(obj); 

// ...later, when the object is not needed any more:
obj = null;

// Can't get cache.size, as it's a WeakMap,
// but it's 0 or soon be 0
// When obj gets garbage collected, cached data will be removed as well 

