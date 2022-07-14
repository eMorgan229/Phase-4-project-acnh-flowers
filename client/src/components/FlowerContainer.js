import React from 'react'
import {useEffect, State} from 'react'
import FlowerCard from './FlowerCard'

function FlowerContainer({flowers}) {
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
            <h1 class="card-title">Click on a Flower to add it to "Your Garden"</h1>
            </div>
            <div 
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // height: '100vh',
            }}
            >
            <h3 class="card-title">When you check the box "add to my garden", the flower will be added to your list of flowers in the "My Garden" page!</h3>
            </div>
            
            {/* flower container */}
            <div>
               <ul className="cards">
                {flowers.map((flower) => (
                  <FlowerCard
                  key={flower.id}
                  flower={flower}
                  />
                ))}
              </ul>



            </div>

    </div>
  ) 
} 


export default Login