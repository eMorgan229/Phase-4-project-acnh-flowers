import React, { useState, useEffect } from 'react'
import { Switch, Route} from "react-router-dom"
import Login from './Login'
import Header from './Header'
import SignUpForm from './SignUpForm'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  },[]);
  

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  

  return (
    <div className="App">
      <Header user={user} onLogout={handleLogout}/>
       
        <Login onLogin={handleLogin}/>
       <SignUpForm onLogin={handleLogin}/>
      
      
    </div>
  )
}

export default App