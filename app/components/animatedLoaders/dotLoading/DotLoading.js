import React from 'react'
import './DotLoading.css'
export default function DotLoading() {
  return (
    <div>
      <h1>Dot Loading</h1>
      <div className="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  )
}
