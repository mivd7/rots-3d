import React from 'react';
import './App.css';
import {Canvas} from 'react-three-fiber';
import Cubes from "./components/Cubes";
import Lights from "./components/Lights";
import Environment from "./components/Environment";
import Model from './components/Artworks/Model'

function App() {
  return (
    <div className="App">
      <Canvas>
        <Model/>
        <Cubes/>
        <Lights/>
        <Environment/>
      </Canvas>
    </div>
  );
}

export default App;
