let user = {
	get fullName() {
		return `...`;
	}
};

user.fullName = "Test"; // Error (property has only a getter)

