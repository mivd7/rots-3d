import React, { Suspense, useRef } from 'react'
import Loading from './Loading';
import rots1obj from '../../assets/rots1.obj';
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

  // function Loading() {
  //     return(
  //       <h1 style={{color: 'red', fontSize: '72px'}}>Loading ... </h1>
  //     )
  //   }

  return(
    <Suspense fallback={<Loading/>}>
        <Asset materialURL={rots1obj} objectURL={rots1obj} />
    </Suspense>
  )
}

export default Model;
