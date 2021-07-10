// 1.js 
import {admin} from './admin.js'; 
admin.name = "Pete"; 

// 2.js
import {admin} from './admin.js'; 
alert(admin.name); // Pete 

// Both 1.js and 2.js reference the same admin object 
// Changes made in 1.js are visible in 2.js 

