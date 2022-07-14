import React, {useState} from 'react'

function FlowerCard({
    flower: {id, name, image, parents, season, is_in_your_garden }
}) {
const [inGarden, setInGarden] = useState(false);



  return (
    <li className="card">
      <div className="image">
        <img src={image} alt="flower" />
      </div>
      <div className="details">
        {inGarden ? (
          <button
            onClick={() => setInGarden(false)}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button
            onClick={() => setFavorite(true)}
            className="emoji-button favorite"
          >
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  )
}

export default FlowerCard