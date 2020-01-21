import React from 'react';
import './App.css';
import {Canvas} from 'react-three-fiber';
import Cubes from "./components/Cubes";
import Lights from "./components/Lights";
import Environment from "./components/Environment";
import Model from './components/Artworks/Model'
// import Controls from './components/Controls'
// import rots1mtl from '../../assets/rots1.mtl';
//materialURL={'./static/media/rots1.mtl'} objectURL={rots1obj}
function App() {
  return (
    <div className="App">
      <Canvas>
        <Model />
        <Cubes/>
        <Lights/>
        <Environment/>
      </Canvas>
    </div>
  );
}

export default App;
