import React, { Suspense } from 'react'
// import { useLoader } from 'react-three-fiber'
import rots1obj from '../../assets/rots1.obj';
import Cube from '../Cubes/Cube';
// import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader'
// import { Object3D } from 'three';
import { loadObjModel } from '../../lib/loader';

const Model = () => {
  const Asset = ({materialURL, objectURL}) => {
    let objectModel = loadObjModel(materialURL, objectURL)
    return (<primitive object={objectModel}/>)
  };

  // let rots1 = loadObjModel('./static/media/rots1.mtl', rots1obj)
  // console.log('rots1: ', rots1)
  return(
    <Suspense fallback={<Cube />}>
      <Asset materialURL={'./static/media/rots1.mtl'} objectURL={rots1obj} />
    </Suspense>
  )
}

export default Model;
