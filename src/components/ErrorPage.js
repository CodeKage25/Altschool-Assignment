import React from "react";
import { Link } from "react-router-dom";




const ErrorPage = () => {

  

  return (
    <div className="error-page">
          
        
          <Link to="/home">
            <button className="error-btn">Go back Home</button>
          </Link>
        </div>
  );
};

export default ErrorPage;
