import React, { Suspense } from 'react'
import { useLoader } from 'react-three-fiber'
import rots1mtl from '../../assets/rots1.mtl';
import rots1obj from '../../assets/rots1.obj';

import Cube from '../Cubes/Cube';
import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader'

const Model = () => {
  const loadObjModel = (materialURL, objectURL) => {
    console.log(materialURL)
    console.log(objectURL)
    new MTLLoader().load(materialURL, materials => {
      materials.preload();
      //materials.Material.side = THREE.DoubleSide;
      console.log("Loaded Materials", materials);
      var objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(
        objectURL,
        object => {
          //const root = object.detail.loaderRootNode;
          console.log("Loaded Obj", object);
          let mesh = object;
          // this.scene.add(object);
          mesh.position.set(0, 0, 0);
          mesh.scale.set(0.07, 0.07, 0.07);
        },
        // called when loading has errors
        xhr => {
          console.log("XHR tf", xhr);
        },
        error => {
          console.error('error!', error)
        }

      );
    });
  };

  loadObjModel('./static/media/rots1.mtl', rots1obj)

  return(
    <Suspense fallback={<Cube />}>
    </Suspense>
  )
}

export default Model;
