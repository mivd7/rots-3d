import React, { useRef } from "react";
import { map } from "lodash";
import { useFrame } from "react-three-fiber";

import Model from "./Model";

export default () => {
  const group = useRef();

  useFrame(() => {
    group.current.rotation.y += 0.005;
  });

  const nodesCubes = map(new Array(1), (el, i) => {
    return <Model key={i} />;
  });

  return <group ref={group}>{nodesCubes}</group>;
};
