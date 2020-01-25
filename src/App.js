import React from 'react';
import './App.css';
import {Canvas} from 'react-three-fiber';
import Lights from "./components/Lights";
import Environment from "./components/Environment";
import Model from './components/Models'
import Controls from './components/Controls'

function App() {
  return (
    <div className="App">
      <Canvas>
        <Model />
        <Controls/>
        <Lights/>
        <Environment/>
      </Canvas>
    </div>
  );
}

export default App;
