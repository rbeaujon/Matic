import React, {useState, useEffect} from 'react';
import './articles.style.scss';
import Articles from '../helper/articles.api';
import Menu from '../menu/menu';

const Dashboard = () => {
	const [articles, setArticles] = useState();
	const [lastest, setLastest] = useState();
	const [show, setShow] = useState("hidden");


	const getArticles = async () => {

		const header = {
			method: 'GET',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify({a: 1, b: 'Textual content'})
		  };
		const resp = await Articles(header);
		const data = await resp.data
		
		setArticles(data)
		setLastest(data.slice(-4))
	}
	const postArticles = async () => {
		const newPost = {
			"author": document.getElementById('nauthor').value,
			"title": document.getElementById('btitle').value,
			"content": document.getElementById('cblog').value
		}
		const header = {
			method: 'POST',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(newPost)
		  };
		const resp = await Articles(header);

		if (resp.statusCode === 201) {
			await getArticles()
			
			//Cleaning form
			const author = document.getElementById('nauthor')
			const title = document.getElementById('btitle')
			const content = document.getElementById('cblog')

			author.value =""; 
			title.value = ""; 
			content.value="";
			

			return "Article created succesfully";
			
		} else {
			const errorResponse =[{"status":resp.status}, {"error":resp.statusText}]
			return errorResponse;
		}

	}
	const delArticle = async (id) => {
		const articleToDelete = {"articleID": id}
		const header = {
			method: 'DELETE',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(articleToDelete)
		  };
		const resp = await Articles(header);

		if(resp.statusCode === 200) {
			await getArticles()
			return "Article created succesfully"
		} else {
			return "Error deleting the article";
		}
	}
	const fillEditArticles = (author, title, content, id) => {
		if(author !== undefined || title !== undefined || content !== undefined) {
			document.getElementById('editId').value = id
			document.getElementById('editAuthor').value = author
			document.getElementById('editTitle').value = title
			document.getElementById('editBlog').value = content
		}

	}
	const editArticle = async () => {

		const id = document.getElementById('editId').value
		const author = document.getElementById('editAuthor').value
		const title = document.getElementById('editTitle').value
		const content = document.getElementById('editBlog').value
		const articleToEdit = {
			"articleID": id,
			"author": author,
			"title": title,
			"content": content
		}
		const header = {
			method: 'PATCH',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(articleToEdit)
		  };
		const resp = await Articles(header);

		if(resp.statusCode === 200) {
			setShow("hidden")
			await getArticles()
		
			return "Article created succesfully"
		} else {
			return "Error deleting the article";
		}
	}

	useEffect(() => {
		getArticles()
	},[])
	
	useEffect(() => {
		fillEditArticles()
	},[show])
	
	
	return (
		<div className="articles">
			<div className='menu'>
				<Menu />
			</div>
			<div className='addArticle'>
				<div className='mainTitle'>Add New Blog Article</div>
					<div className='containerNewArticle'>
					<div id="author">
						<label for="author">Author</label><br/>
  						<input type="text" id="nauthor" name="nauthor"></input>
					</div>
					<div id="blogTitle">
						<label for="blog">Blog Title</label><br/>
  						<input type="text" id="btitle" name="btitle"></input>
					</div>
					<div id="blogContent">
						<label for="cblog">Blog Content</label><br/>
  						<textarea type="text" id="cblog" name="cblog"></textarea>
					</div>
					<div>
						<button  onClick={ () =>  postArticles()}>Save</button>
					</div>
				</div>
			</div>
			<div className='previousArticles'>
				<div className='mainTitle'>Previous Articles</div>
				
				<div className='showArticles'>
					<table>
						<tr>
							<th>Author</th>
							<th>Title</th>
							<th>Content</th>
							<th>Date</th>
							<th></th>
							<th></th>
						</tr>
					{articles && articles.map((key) => {
						return ( 
							<tr>
								<td id="author">{key.author}</td>
								<td id="title">{key.title}</td>
								<td id="content">{key.content}</td>
								<td id="date">{(key.createdAt).slice(0,10).split('-').reverse().join('/')}</td>
								<td id="delete" onClick={()=> delArticle(key.id)}>Delete</td>
								<td id="edit" onClick={() => { setShow("show"); fillEditArticles(key.author,key.title, key.content, key.id) }}>Edit</td>
							</tr>
						
							) 
						})}
					</table>
				</div>	
			</div>	
			<div className={show}>
			<div className='editArticles '>
				<div className='containerEditArticle'>
					<button id="close" onClick={() =>setShow("hidden")}>X</button>
					<div id="author">
						<label for="author">Author</label><br/>
						<input type="text" id="editAuthor" name="nauthor"></input>
					</div>
					<div id="blogTitle">
						<label for="blog">Blog Title</label><br/>
						<input type="text" id="editTitle" name="btitle"></input>
					</div>
					<div id="blogContent">
						<label for="cblog">Blog Content</label><br/>
						<textarea type="text" id="editBlog" name="cblog"></textarea>
					</div>
					<input id="editId" type="hidden"  />
					<div>
						<button id="save" onClick={ () =>  {editArticle()}}>Save</button>
					</div>
				</div>
			</div>
			</div>
			<div className='latestArticles'>
				<div className='mainTitle'>Lastest Articles</div>
				<div className='containerLastArticles'>
				{lastest && lastest.map((key) => {
					return (
						<>
						<div>
							<img src={key.imageUrl} alt={key.title}></img>	
							<div id='author'>by {key.author}</div>
							<div id='title'>{key.title}</div>
							<div id='content'>{key.content}</div>
						</div>
						</>
					)
				})}
				</div>
			</div>
			<div className='footer'>
			</div>
		</div>
	)

}

export default Dashboard;