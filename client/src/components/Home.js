import React from 'react'
import acnhLogo from '../Images/acnhLogo.jpg'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'


function Home() {
  return (
    <div>
        <div 
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // height: '100vh',
            }}
            >
            <h1 class="card-title">Welcome to Animcal Crossing: Cross-Pollination!</h1>

            </div>

            <div 
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
            >
            <img src={acnhLogo} alt="acnh-flowers logo"> 
            </img>
            </div>
        
        <div class="container">
            With this app, everything you want to know about the flowers of the ACNH world is at your fingertips! We have information ranging from the genius behind the genetics of the flowers in the game, to resources on flower breeding and even a tool to help you start your very own ACNH garden and track your progress!
        </div>
        <h5 class="card-title">Additional Resources</h5>

        <div class="container">
            Links to resources here
        </div>
        <h5 class="card-title">Special Thanks!</h5>

        <div class="container">
            Thank you to the people I datamined from!
        </div>






    </div>
  )
}

export default Home