let date = new Date("2017-01-26"); 
alert(date); 
// The time is not set, so it's assumed to be midnight GMT and
// is adjusted according to the timezone the code is run in 
// So the result could be 
// Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
// or
// Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)

