import React from "react";
import { useNavigate } from 'react-router-dom';
import './menu.style.scss';

const Menu = () => {

	const navigate = useNavigate();

	return (
		<div className='navigation'>
			<nav>
				<ul class="menu">
					<li><div onClick={()=>navigate("/matic")}>Main menu</div></li>
					<li><div onClick={()=>navigate("/logic")}>Logic</div></li>
					<li><div onClick={()=>navigate("/articles")}>Articles</div></li>
				</ul>
			</nav>
	 	</div>
	)

}

export default  Menu