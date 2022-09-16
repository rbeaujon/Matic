const Articles = async (method) => {

	if(method==="GET"){
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
	if(method==="POST"){

	}
	if(method==="DELETE"){

	}
	if(method==="PATCH"){

	}

}


module.exports = Articles