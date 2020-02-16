import React from 'react'
import {Dom} from 'react-three-fiber'

export default function Loading() {
  return(
    <Dom position={[100, 0, 100]}>
      <h1>Loading...</h1>
    </Dom>
  )
}