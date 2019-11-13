import React from 'react';
import './App.css';
import Controls from './components/Controls';
import DrumPanel from './components/DrumPanel';

function App() {
  return (
    <div id="app">
      <div>
        <Controls />
      </div>
      <div>
        <DrumPanel />
      </div>
    </div>
  );
}

export default App;
