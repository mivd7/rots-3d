import React from "react";

export default () => {
  return (
    <group>
      <ambientLight intensity={.5} />
      <pointLight intensity={.7} position={[0, 0, 3]} />
    </group>
  );
};
