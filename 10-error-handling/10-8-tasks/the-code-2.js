function f() { 
	try { 
		alert('start'); 
		return "result"; 
	}  catch (err) {
		/// ...
	} finally {
		alert('cleanup!');
	}
} 

f(); // cleanup! 

