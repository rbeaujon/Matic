import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from './App';
import Dashboard from './components/dashboard';
import Logic from './components/logic';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
          <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/logic" element={ <Logic />}/>
        <Route exact path="/" element={ <App />}/>
      </Routes>
      </BrowserRouter>
      </>
   
  </React.StrictMode>
);

