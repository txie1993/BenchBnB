import React from 'react';

const Greeting = ({currentUser}) => {
  if (currentUser) {
    return (
      <h1>Welcome, {currentUser.username}</h1>
      

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
