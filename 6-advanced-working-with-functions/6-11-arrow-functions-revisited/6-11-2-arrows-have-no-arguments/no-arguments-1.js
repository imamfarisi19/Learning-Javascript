function defer(f, ms) {
	return function(...args) {
		let ctx = this;
		setTimeout(function() {
			return f.apply(ctx, args);
		}, ms);
	};
}

