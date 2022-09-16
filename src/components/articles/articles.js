import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './articles.style.scss';
import Articles from '../helper/articles.api';
import Menu from '../menu/menu';;

const Dashboard = () => {
	const navigate = useNavigate();
	const [articles, setArticles] = useState('');

	const getArticles = async () => {
		const resp = await Articles();
		const data = await resp.data
		
		setArticles(data)
	}

	useEffect(() => {
		getArticles()
	})
	
	
	return (
		<div className="Dashboard">
			<div className='menu'>
				<Menu />
			</div>
			<div className='addArticle'>
					<h1>ADD ARTICLES</h1>
			</div>
			<div className='container'>
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
			{/* <div className='submenu'>
         		<button onClick={()=>navigate("/logic")}>Logic</button>
				<button onClick={()=>navigate("/")}>Main menu</button>
      		</div> */}
		</div>
	)

}

export default Dashboard;