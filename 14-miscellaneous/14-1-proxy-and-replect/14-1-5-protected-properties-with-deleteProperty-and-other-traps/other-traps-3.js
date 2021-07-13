user = {
	// ... 
	checkPassword(value) {
		// object method must be able to read _password 
		return value === this._password;
	}
}

