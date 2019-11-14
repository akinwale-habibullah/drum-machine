import React from 'react';
import './VolumeControl.css'

const VolumeControl = (props) => {
  return (
    <div className="volume-block">
      <input type="range" min="1" max="100" defaultValue="50" className="volume-control" id="myRange" />
    </div>
  )
}

export default VolumeControl;
