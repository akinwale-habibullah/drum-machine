import React from 'react';
import './Controls.css';
import PowerSwitch from './PowerSwitch';

const Controls = (props) => {
  return (
    <div className="control-panel">
      <PowerSwitch className="power-switch" />
      <div className="label">2</div>
      <div className="volume">3</div>
      <div className="type-switch">4</div>
    </div>
  )
}

export default Controls;
