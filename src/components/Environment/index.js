import React from "react";
import { BackSide } from "three";

export default () => {
  return (
    <mesh>
      <sphereBufferGeometry args={[50, 100, 100]} attach="geometry" />
      <meshStandardMaterial
        color={0xffff}
        attach="material"
        side={BackSide}
      />
    </mesh>
  );
};
