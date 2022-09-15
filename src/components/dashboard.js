import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
	const navigate = useNavigate();

	<h1>DASHBOARD</h1>
	
	return (
		<div>
        <button onClick={()=>navigate("/dashboard")}>Dashboard</button>
		<button onClick={()=>navigate("/")}>Main menu</button>
      </div>
	)

}

export default Dashboard;