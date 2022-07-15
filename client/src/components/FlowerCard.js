import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FlowerCard({flower, onDeleteFlower, onUpdateFlower}){
    const {id, name, image, parents, season, is_in_your_garden} = flower;

  

  //toggle boolean to be the opposite of what it currently is:
  function handleAddToGardenClick(flower) {
    // e.preventDefault()
    const updateObj = {
      flower_id: flower.id,
      user_id: 1
    };

    fetch('/garden', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((r) => r.json())
      .then(onUpdateFlower);
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Title>{name}</Card.Title>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Text>
          <h5>PARENTS: {parents}</h5>
          <h5>SEASON: {season}</h5>
        </Card.Text>
        <Button variant="primary" onClick={() => handleAddToGardenClick(flower)}>Add to your Garden!</Button>
        {/* <Button variant="primary" onClick={handleDeleteClick}>Delete Flower</Button> */}
      </Card.Body>
    </Card>




    // <div className="card">
    //   <h2>{name}</h2>
    //   <img src={image} alt={name} className="flower-avatar" width= "200"/>
    //   <p>{is_in_your_garden} Add to your garden! </p>
    //   <button className="like-btn" onClick={handleAddToGardenClick} width="200">
    //     My Garden {"<3"}
    //   </button>
    //   <button className="del-btn" onClick={handleDeleteClick} width="200">
    //     Remove Flower {":("}
    //   </button>
    // </div>
  )
}

export default FlowerCard