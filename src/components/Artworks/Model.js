import React, { Suspense } from 'react'
import rots1obj from '../../assets/rots1.obj';
import Cube from '../Cubes/Cube';
import { loadObjModel } from '../../lib/loader';

const Model = () => {
  const Asset = ({materialURL, objectURL}) => {
    let objectModel = loadObjModel(materialURL, objectURL)
    return (<primitive object={objectModel}/>)
  };

  return(
    <Suspense fallback={<Cube />}>
      <Asset materialURL={'./static/media/rots1.mtl'} objectURL={rots1obj} />
    </Suspense>
  )
}

export default Model;
