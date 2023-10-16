
import React from "react"; 
// importing Link from react-router-dom to navigate to  
// different end points. 
import { Link } from "react-router-dom"; 
import '../styles/index.css';
import '../styles/title.css';

const Home = () => { 
  return ( 
    <div className="container"> 
        <h1 class="sweet-text"> 
            <span data-text="Home Page">Home Page</span>
        </h1>
        <ul> 
        <li> 
          {/* Endpoint to route to Home component */} 
          <Link to="/">Home</Link> 
        </li> 
        <li> 
          {/* Endpoint to route to About component */} 
          <Link to="/about">About</Link> 
        </li> 
      </ul> 
    </div> 
  ); 
}; 
  
export default Home; 
