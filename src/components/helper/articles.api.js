const Articles = async (header) => {

	const {method, body} = header;
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
		const URL = "https://www.api.recruitment.matic.io/articles";
		const rawResponse = await fetch(URL, header);
		const response = await rawResponse.json();
		if (rawResponse.status === 201) {
			return response
		} else {
			const errorResponse =[{"status":rawResponse.status}, {"error":rawResponse.statusText}]
			return errorResponse;
		}
	}
	if(method==="DELETE"){

		const json = JSON.parse(body)
		const id = json.articleID;
		const URL = "https://www.api.recruitment.matic.io/articles/"+id;
		const rawResponse = await fetch(URL, header);
		const response = await rawResponse.json();
		if (rawResponse.status === 200) {
			return response
		} else {
			const errorResponse =[{"status":rawResponse.status}, {"error":rawResponse.statusText}]
			return errorResponse;
		}
	}
	if(method==="PATCH"){
		const json = JSON.parse(body)
		const id = json.articleID;
		const URL = "https://www.api.recruitment.matic.io/articles/"+id;
		const rawResponse = await fetch(URL, header);
		const response = await rawResponse.json();
		if (rawResponse.status === 200) {
			return response
		} else {
			const errorResponse =[{"status":rawResponse.status}, {"error":rawResponse.statusText}]
			return errorResponse;
		}
	}

}


module.exports = Articles