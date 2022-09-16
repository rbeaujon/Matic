import React, {useState, useEffect} from 'react';
import './articles.style.scss';
import Articles from '../helper/articles.api';
import Menu from '../menu/menu';;

const Dashboard = () => {
	const [articles, setArticles] = useState();
	const [lastest, setLastest] = useState();


	const getArticles = async () => {
		const method = "GET"
		const resp = await Articles(method);
		const data = await resp.data
		
		setArticles(data)
		setLastest(data.slice(0,4))
	}

	useEffect(() => {
		getArticles()
	})
	
	
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
  						<input type="text" id="nblog" name="nblog"></input>
					</div>
					<div id="blogContent">
						<label for="cblog">Blog Content</label><br/>
  						<textarea type="text" id="cblog" name="cblog"></textarea>
					</div>
					<div>
						<button  onClick="">Save</button>
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
								<td>{key.author}</td>
								<td>{key.title}</td>
								<td className='content'>{key.content}</td>
								<td>{(key.createdAt).slice(0,10).split('-').reverse().join('/')}</td>
								<td>Delete</td>
								<td>Edit</td>
							</tr>
						
							) 
						})}
					</table>
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