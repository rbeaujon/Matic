import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from './App';
import Articles from './components/articles/articles';
import Logic from './components/logic/logic';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/articles" element={<Articles/>}/>
        <Route exact path="/logic" element={ <Logic />}/>
        <Route exact path="/matic" element={ <App />}/>
      </Routes>
      </BrowserRouter>
      </>
   
  </React.StrictMode>
);

