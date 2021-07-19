// logNow will be the partial of log with fixed first argument
let logNow = log(new Date()); 

// use it 
logNow("INFO", "message"); // [HH:mm] INFO message 

