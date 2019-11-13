import React from 'react';
import './DrumPanel.css';
import DrumPad from './DrumPad';

const DrumPanel = props => {
  return (
    <div className="drum-panel">
      <DrumPad />
      <DrumPad />
      <DrumPad />
      <DrumPad />
      <DrumPad />
      <DrumPad />
      <DrumPad />
      <DrumPad />
      <DrumPad />
    </div>
  );
};

export default DrumPanel;
