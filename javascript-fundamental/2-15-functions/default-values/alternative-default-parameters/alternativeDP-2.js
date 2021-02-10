// if there's no "count" parameter, show "unknown" 
function showCount(count) {
	alert(count ?? "unknown");
}

showCount(0); // 0 
showCount(null); // unknown 
showCount(); // unknown 

