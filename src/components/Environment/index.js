import React from "react";
import { DoubleSide } from "three";

export default () => {
  return (
    <mesh>
      <sphereBufferGeometry args={[100, 100, 100]} attach="geometry" />
      <meshStandardMaterial
        color={0xeeee}
        attach="material"
        side={DoubleSide}
      />
    </mesh>
  );
};
