let aWord = "AL"; 
let dateToday = new Date().getDate()+"-"+new Date().getMonth()+"-"+new Date().getFullYear();
let digits_4 = "0000"; 

let combineWord = aWord.concat('', dateToday, digits_4);
let cleanStrip = combineWord.replaceAll('-', '');
let arrWord = cleanStrip.split('');

for (let count = 1; count <= 2000; count++) {
	if (count < 10) {
		arrWord.pop();
		count = count.toString();
	    arrWord.push(count);	
	} else if (count < 100) {
		arrWord.pop();
		arrWord.pop();
		count = count.toString(); 
		let arrCount = count.split(''); 
		arrWord.push(arrCount[0]); 
		arrWord.push(arrCount[1]); 
	} else if (count < 1000) { 
		arrWord.pop();
		arrWord.pop();
		arrWord.pop();
		count = count.toString(); 
		let arrCount = count.split(''); 
		arrWord.push(arrCount[0]); 	
		arrWord.push(arrCount[1]); 
		arrWord.push(arrCount[2]);
	} else if (count < 10000) {
		arrWord.pop();
		arrWord.pop();
		arrWord.pop();
		arrWord.pop();
		count = count.toString(); 
		let arrCount = count.split(''); 
		arrWord.push(arrCount[0]); 	
		arrWord.push(arrCount[1]); 
		arrWord.push(arrCount[2]);
		arrWord.push(arrCount[3]);
	} else {
		alert("has reach maximum users"); 
	}
}

let customerId = arrWord.join('');
console.log(customerId);
