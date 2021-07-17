let revokes = new WeakMap(); 

let object = {
	data: "Valuable data"
};

let {proxy, revoke} = Proxy.revocable(object, {}); 

revokes.set(proxy, revoke); 

// ..somewhere else in our code.. 
revoke = revokes.get(proxy); 
revoke(); 

alert(proxy.data); // Error (revoked)

