import React, { useEffect, useState } from 'react'
// import FlowerContainer from './FlowerContainer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Garden({ user, setUser, flower }) {
    const [flowers, setFlowers] = useState([]);
    // const {id} = flower;


    useEffect(() => {
        fetch('/me')
            .then((u) => {
                console.log(u)
                u.json().then((USER) => fetch(`/user/${USER.id}/flowers`)
                    .then((r) => r.json())
                    .then(setFlowers))
            });
    }, []);
    
    
    function handleDeleteFlower(deletedFlower) {
        setFlowers((flowers) =>
          flowers.filter((flower) => flower.id !== deletedFlower.id)
        );
      }

    function handleDeleteClick(f) {

        fetch('/delete-garden', {
          method: "POST",
            body: JSON.stringify({
                flower_id: f.id, 
                user_id: user.id
            })
        })
          .then((r) => r.json()
          .then(flower => handleDeleteFlower(flower)))
          
        
      }

      

    // if (flowers !== []) {
    //     const flowerCards = flowers.map((flower) => {

    //         const { name, image, parents, season } = flower;

    //         return ()
    //     });
    // }
    //   console.log(flowers)
    const displayedListings = flowers.map((f) =>
    (
        <Card key={Math.random()} style={{ width: '18rem' }}>
            <Card.Title>{f.name}</Card.Title>
            <Card.Img variant="top" src={f.image} />
            <Card.Body>
                    <h5>PARENTS: {f.parents}</h5>
                    <h5>SEASON: {f.season}</h5>
                {/* <Button variant="primary" onClick={handleDeleteClick}>Delete Flower</Button> */}
                <Button variant="primary" onClick={() => handleDeleteClick(f)}>Delete Flower</Button>
            </Card.Body>
        </Card>
    )
    );



    // function handleDeleteClick() {
    //     console.log("flower deleted")
    // }

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
            <h1 className="card-title">Your Garden</h1>
            </div>
            {/* <FlowerContainer> */}
            {displayedListings}

            {/* </FlowerContainer> */}
        </div>
    )
}

export default Garden