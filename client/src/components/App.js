import React, { useState, useEffect } from 'react'
 import Login from './Login'
 import Header from './Header'
 import SignUpForm from './SignUpForm'
 import acnhLogo from '../Images/acnhLogo.jpg'
 import {Switch, Route} from "react-router-dom"
//bootstrap
import NavBar from "./Navbar"
import 'bootstrap/dist/css/bootstrap.min.css'

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

  

  //bootstrap return
  return (
    <div>
      <NavBar user={user} setUser={setUser}/>
    <Switch>
      <Route path="/login">
        <Login/>
      </Route>
    </Switch>
    </div>
    
    
  );


//original return
  // return (
  //   <div className="App">
  //     <Header user={user} onLogout={handleLogout}/>
       
  //       <Login onLogin={handleLogin}/>
  //      <SignUpForm onLogin={handleLogin}/>
      
      
  //   </div>
  // )
}

export default App