let worker = {
	slow(min, max) {
	return min + max; //scary CPU-hogger is assumed
	}
};

// should remember same-arguments calls
worker.slow = cachingDecorator(worker.slow); 

