class Article {
	constructor(title, date) {
		this.title = title;
		this.date = date;
	}

	static createTodays() {
		// remember, this = Article
		return new this("Today's digest", new Date());
	}
}

let article = Article.createTodays();

alert( article.title ); // Today's digest 

