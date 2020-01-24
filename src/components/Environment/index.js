import React from "react";
import { BackSide } from "three";

export default () => {
  return (
    <mesh>
      <sphereBufferGeometry args={[50, 100, 100]} attach="geometry" />
      <meshStandardMaterial
        color={0x0000}
        attach="material"
        side={BackSide}
      />
    </mesh>
  );
};
