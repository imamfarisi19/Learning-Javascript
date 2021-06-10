// toStringTag for the environtment-specific object and class: 
alert( window[Symbol.toStringTag] ); // Window 
alert( XMLHttpRequest.prototype[Symbol.toStringTag] ); // XMLHttpRequest 

alert( {}.toString.call(window) ); // [Object Window] 
alert( {}.toString.call( new XMLHttpRequest()) ); // [object XMLHttpRequest] 

