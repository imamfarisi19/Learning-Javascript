let timerId = setTimeout(() => alert("never happens"), 1000); 
alert(timerId); // timer identifier 

clearTimeout(timerId);
alert(timerId); // same identifier (doesn't become null after canceling)

