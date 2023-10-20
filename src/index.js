import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/title.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/rain.css'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div class="box">
    <div class="title-wrapper">
    <div className='x1 cloud'></div> 
 
      <h1 class="sweet-title"> 
      
        <span data-text="Weather">Weather</span>
        <span data-text="Teller">Teller</span>
        
      </h1>
      
    </div>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  <div className='container'></div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
