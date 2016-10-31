import React from 'react';
import { Link } from 'react-router';

const Greeting = ({currentUser, logout}) => {
  if (currentUser) {
    return (
      <div>
      <h1>Welcome, {currentUser.username}</h1>
      <button onClick={logout}> Log out </button>
      </div>  

    );
  }
  else {
    return(
      <div>
        <ul>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Log In</Link></li>
        </ul>
      </div>
    );
  }

};

export default Greeting;
