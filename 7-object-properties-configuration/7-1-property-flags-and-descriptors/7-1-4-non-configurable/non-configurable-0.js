let descriptor = Object.getOwnPropertyDescriptor(Math, 'Pi'); 

alert( JSON.stringify(descriptor, null, 2) ); 
/* 
{ 
	"value": 3.141592653589793, 
	"writable": false, 
	"enumerable": false, 
	"configurable": false 
} 
*/ 

