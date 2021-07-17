let map = new Map(); 

let proxy = new Proxy(map, {}); 

proxy.set('test', 1); // Error 

