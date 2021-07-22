// parent of <body> is <html> 
alert( document.body.parentNode === document.documentElement ); // true 

// after <head> goes <body>
alert( document.head.nextSibling ); // HTMLBodyElement 

// before <body> goes <head>
alert( document.body.previousSibling ); // HTMLHeadElement

