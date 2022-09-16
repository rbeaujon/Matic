import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

function App() {

  const navigate = useNavigate();


  return (
    <div className="App">
        <div className="button main">
          <button onClick={()=>navigate('/logic')}>Logic</button>
          <button onClick={()=>navigate('/articles')}>Articles</button>
        </div>
    </div>
  );
}

export default App;
