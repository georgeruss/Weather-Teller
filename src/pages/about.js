import React from "react";
import { Link } from "react-router-dom"; 
const About = () => {
    return (
        <div  className="">
            <h1>
                About
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
 
export default About;
