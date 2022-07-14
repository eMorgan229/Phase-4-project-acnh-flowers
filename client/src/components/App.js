import React, { useState, useEffect } from 'react'
 import Login from './Login'
 import SignUpForm from './SignUpForm'
 import Home from './Home'
 import FlowerContainer from './FlowerContainer'
 import {Routes, Route} from "react-router-dom"
//bootstrap
import NavBar from "./Navbar"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  //LOGIN
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

  //FLOWER FETCH
   const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    fetch("/flowers")
    .then((r) => r.json())
    .then(setFlowers);
  }, []);

  function handleDeleteFlower(flowerToDelete) {
    const updatedFlowers = flowers.filter((flower) => flower.id !== flowerToDelete.id);
    setFlowers(updatedFlowers);
  }

  function handleUpdateFlower(updatedFlower) {
    const updatedFlowers = flowers.map((flower) =>
      flower.id === updatedFlower.id ? updatedFlower : flower
    );
    setFlowers(updatedFlowers);
  }
  

  //bootstrap return
  return (
    <div>
      <NavBar user={user} setUser={setUser} onLogout={handleLogout} onLogin={handleLogin}/>
    <Routes>
      <Route path="/login" element={<Login onLogin={handleLogin}/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/flowers" element={<FlowerContainer
        flowers={flowers}
        onDeleteFlower={handleDeleteFlower}
        onUpdateFlower={handleUpdateFlower}
        />}
      />


    </Routes>
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