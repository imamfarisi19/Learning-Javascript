class Rabbit extends Animal {
	stop() {
		setTimeout(() => super.stop(), 1000); // call parent stop aftter 1 sec 
	}
}
