import React from 'react';
import './App.css';
import ControlPanel from './components/ControlPanel';
import DrumPanel from './components/DrumPanel';

function App() {
  return (
    <div id="app">
      <div>
        <ControlPanel />
      </div>
      <div>
        <DrumPanel />
      </div>
    </div>
  );
}

export default App;
