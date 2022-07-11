import React, { useState, useEffect } from 'react'
import Login from './Login'

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
  if(user) {
    return <h2>Welcome, {user.username}</h2>
  }

  function handleLogin(user) {
    setUser(user)
  }

  

  return (
    <div>
      <Login onLogin={handleLogin}/>

    </div>
  )
}

export default App