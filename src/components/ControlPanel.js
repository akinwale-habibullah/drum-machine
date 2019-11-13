import React from 'react';
import './ControlPanel.css';
import PowerSwitch from './PowerSwitch';
import TypeSwitch from './TypeSwitch';
import Label from './Label';

const ControlPanel = (props) => {
  return (
    <div className="control-panel">
      <PowerSwitch />
      <TypeSwitch />
      <div className="label-container">
        <Label />
      </div>
      
      <div className="volume">4</div>
    </div>
  )
}

export default ControlPanel;
