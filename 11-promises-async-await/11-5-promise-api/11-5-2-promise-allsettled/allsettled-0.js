Promise.all([
	fetch('/template.html'), 
	fetch('/style.css'),
	fetch('/data.json') 
]).then(render); // render method needs results of all fetches 

