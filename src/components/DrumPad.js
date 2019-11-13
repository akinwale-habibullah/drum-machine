import React from 'react'
import './DrumPad.css';

const DrumPad = (props) => {
  return (
    <div>
      <button type="button" onClick={console.log('button clicked')} className="button">Click me</button>
    </div>
  )
}

export default DrumPad;
