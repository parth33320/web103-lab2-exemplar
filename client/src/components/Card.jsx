import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ gift }) => {
  return (
    <div className="card">
      <div
        className="top-container"
        style={{ backgroundImage: `url(${gift.image || gift.imageurl || gift.image_url})` }}
      />
      <div className="bottom-container">
        <h3>{gift.name}</h3>
        <p>Price: {gift.pricepoint || gift.pricePoint}</p>
        <p>Great For: {gift.audience}</p>
        <Link to={`/gifts/${gift.id}`}>Read More &gt;</Link>
      </div>
    </div>
  )
}

export default Card
