import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './title.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div class="box">
  <div class="">
    <div class="title-wrapper">
      <h1 class="sweet-title">
        <span data-text="George's">George's</span>
        <span data-text="Weather">Weather</span>
        <span data-text="Teller">Teller</span>
      </h1>
    </div>
  </div>

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
