import React from 'react'
import './Heading.css'
const Heading = (props) => {
  return (
    <div className="heading my-3">
      <h2>{props.text}</h2>
      <span></span>
    </div>
  )
}

export default Heading