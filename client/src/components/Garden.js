import React, { useEffect, useState } from 'react'
// import FlowerContainer from './FlowerContainer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Garden({ user, setUser, onDeleteFlower, flower }) {
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

    function handleDeleteClick(f) {
        fetch(`/flowers/${f.id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => {
            onDeleteFlower(setFlowers);
          });
      }

    // if (flowers !== []) {
    //     const flowerCards = flowers.map((flower) => {

    //         const { name, image, parents, season } = flower;

    //         return ()
    //     });
    // }

    const displayedListings = flowers.map((f) =>
    (
        <Card style={{ width: '18rem' }}>
            <Card.Title>{f.name}</Card.Title>
            <Card.Img variant="top" src={f.image} />
            <Card.Body>
                <Card.Text>
                    <h5>PARENTS: {f.parents}</h5>
                    <h5>SEASON: {f.season}</h5>
                </Card.Text>
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
            {/* <FlowerContainer> */}
            {displayedListings}

            {/* </FlowerContainer> */}
        </div>
    )
}

export default Garden