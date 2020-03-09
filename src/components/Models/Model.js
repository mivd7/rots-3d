import React, { Suspense, useRef } from 'react'
import rots1obj from '../../assets/rots1.obj';
import { loadObjModel } from '../../lib/loader';
import { useFrame } from 'react-three-fiber';
import Loading from './Loading';

const Model = () => {
  const objectModel = loadObjModel(rots1obj, rots1obj)
  const Asset = ({objectModel}) => {
    const mesh = useRef()
    console.log(mesh)
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
    
    return (
      <mesh ref={mesh}
            scale={[1, 1, 1]}>
        <primitive object={objectModel}/>
      </mesh>
    )
  };

  return(
        <>
          <Suspense fallback={<Loading/>}>
              <Asset objectModel={objectModel} />
          </Suspense>
        </>
  )
}

export default Model;
