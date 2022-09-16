const Articles = async () => {
	const URL = "https://www.api.recruitment.matic.io/articles";
	const resp = await fetch(URL);
	const articles = await resp.json();
	if (resp.status === 200) {
		return articles
	} else {
		const errorResponse =[{"status":resp.status}, {"error":resp.statusText}]
		return errorResponse;
	  }
}


module.exports = Articles