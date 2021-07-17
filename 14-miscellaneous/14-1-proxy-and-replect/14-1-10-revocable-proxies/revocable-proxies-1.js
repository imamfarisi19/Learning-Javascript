let object = {
	data: "Valuable data"
}; 

let {proxy, revoke} = Proxy.revocable(object, {}); 

// pass the proxy somewhere instead of object...
// alert(proxy.data); // Valuable data 

// later in our code 
revoke(); 

// the proxy isn't working any more (revoked) 
alert(proxy.data); // Error 

