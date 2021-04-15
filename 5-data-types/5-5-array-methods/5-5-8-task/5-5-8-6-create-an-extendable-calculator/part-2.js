let powerCalc = new Calculator; 
powerCalc.addMethod("*", (a, b) => a * b); 
powerCalc.addMethod("/", (a, b) => a / b); 
powerCalc.addMethod("**", (a, b) => a ** b); 

let result = powerCalc.calculate("2 ** 3"); 
alert(result); // 8 

