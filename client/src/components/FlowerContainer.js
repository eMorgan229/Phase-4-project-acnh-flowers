import React from 'react'
import {useEffect, State} from 'react'
import { Grid } from 'react-bootstrap';
import FlowerCard from './FlowerCard'

function FlowerContainer({flowers, onDeleteFlower}) {

/* map for flower cards */
const flowerCards = flowers.map((flower) => (
  <FlowerCard
    key={flower.id}
    flower={flower}
    onDeleteFlower={onDeleteFlower}
  />
));

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
            <div 
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
               {flowerCards}
            </div>

    </div>
  ) 
} 


export default FlowerContainer