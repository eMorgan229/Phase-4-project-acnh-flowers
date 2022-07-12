import React from 'react'
import {Link} from "react-router-dom"
import acnhLogo from '../Images/acnhLogo.jpg'


function Header({user, onLogout}) {

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout(user));
  }

  return (
    <header>
          <img src={acnhLogo} alt="acnh-flowers logo"> 
          </img>
          {user ? (
            <div>
              <p>Welcome, {user.name}!</p>
              <button onClick={handleLogout}>Logout</button>
              </div>
          ):(
        <Link to="/login">Click Here to Login</Link>
          )}
    </header>
  );
}

export default Header