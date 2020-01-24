import React, { Suspense, useRef } from 'react'
import rots1obj from '../../assets/rots1.obj';
import rots1mtl from '../../assets/rots1.obj';
import Cube from '../Cubes/Cube';
import { loadObjModel } from '../../lib/loader';
import { useFrame } from 'react-three-fiber';

const Model = () => {
  const Asset = ({materialURL, objectURL}) => {
    const mesh = useRef()
    const objectModel = loadObjModel(materialURL, objectURL)
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
    return (
      <mesh ref={mesh}
            scale={[1, 1, 1]}>
        <primitive object={objectModel}/>
      </mesh>
    )
  };

  return(
    <Suspense fallback={<Cube />}>
        <Asset materialURL={rots1mtl} objectURL={rots1obj} />
    </Suspense>
  )
}

export default Model;
