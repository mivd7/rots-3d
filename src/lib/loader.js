import {
  MTLLoader,
  OBJLoader
} from 'three-obj-mtl-loader'
import {
  Object3D,
} from 'three';

export const loadObjModel = (materialURL, objectURL) => {
  let model = new Object3D();
  new MTLLoader().load(materialURL, materials => {
    materials.preload();
    var objLoader = new OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load(
      objectURL,
      object => {
        console.log("Loaded Obj", object);
        model.add(object)
      },
      progress => {
        let percentage = (progress.loaded / progress.total) * 100;
        console.log("Loading..." + Math.round(percentage) + "%");
      },
      error => console.error('error!', error)
    );
  });
  model.scale.set(0.08, 0.08, 0.08);
  return model;
};