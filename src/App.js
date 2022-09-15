import React from 'react';
import { useNavigate } from 'react-router-dom'

function App() {

  const navigate = useNavigate();

  // function handleClick() {
  //   navigate("/dashboard");
  // }

  return (
    <div className="App">
        <div>
          <button onClick={()=>navigate('/logic')}>Go to Logic</button>
          <button onClick={()=>navigate('/dashboard')}>Go to Dashboard</button>
        </div>
    </div>
  );
}

export default App;
