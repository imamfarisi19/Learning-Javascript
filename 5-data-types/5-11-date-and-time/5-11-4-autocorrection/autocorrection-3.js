let date = new Date(2016, 0, 2); // 2 Jan 2016 

date.setDate(1); // set day 1 of month 
alert(date); 

date.setDate(0); // min day is 1, so the last day of the previous month is assumed
alert(date); // 31 Dec 2015 

