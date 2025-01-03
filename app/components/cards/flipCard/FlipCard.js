import React from 'react'
import './FlipCard.css'
export default function FlipCard() {
  return (
    <div>
      <h1>Flip Card</h1>
      <div className="card">
        <div className="card-front-side">
            <h1>card front side</h1>
        </div>
        <div className="card-back-side">
            <h1>Card Back Side</h1>
        </div>
      </div>
    </div>
  )
}
