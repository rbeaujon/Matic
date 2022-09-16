import React from "react";
import { useNavigate } from 'react-router-dom';
import './menu.style.scss';

const Menu = () => {

	const navigate = useNavigate();

	return (
		<div className='navigation'>
			<nav>
				<ul class="menu">
					<li><a onClick={()=>navigate("/")}>Main menu</a></li>
					<li><a onClick={()=>navigate("/logic")}>Logic</a></li>
					<li><a onClick={()=>navigate("/articles")}>Articles</a></li>
				</ul>
			</nav>
	 	</div>
	)

}

export default  Menu