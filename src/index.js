import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div id="clouds">
    <h1 class="title">Weather App</h1>
    <React.StrictMode>
    <App />
  </React.StrictMode>
    	<div class="cloud x3"></div>
      <div class="cloud x2"></div>
      <div class="cloud x4"></div>
      <div class="cloud x5"></div>
      <div class="cloud x1"></div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
