import React from 'react';
import './ControlPanel.css';
import Switch from './Switch';
import Label from './Label';
import VolumeControl from './VolumeControl';

const ControlPanel = (props) => {
  return (
    <div className="control-panel">
      <Switch label="Power" 
        style={{alignItems: "center",display: "grid", gridTemplateColumns: "0.8fr 1.2fr", height: "100%", justifyItems: "right"}}
        containerStyle={{paddingLeft: "20%"}}/>
      <Switch label="Bank" 
        style={{alignItems: "center",display: "grid", gridTemplateColumns: "0.8fr 1.2fr", height: "100%", justifyItems: "left"}}
        containerStyle={{paddingLeft: "10px"}}/>
      <div className="label-container">
        <Label />
      </div>
      <div className="volume-container">
        <VolumeControl />
      </div>
    </div>
  )
}

export default ControlPanel;
