import React, { useRef } from 'react'
import { useThree, useRender, extend } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

export default () => {
  const { camera } = useThree()
    const controls = useRef()

    
  return <orbitControls ref={controls} args={[camera]} {...props} />
}