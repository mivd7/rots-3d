import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader'

export const loadObjModel = (materialURL, objectURL) => {
  const mtlLoader = new MTLLoader();
  let loader;
  mtlLoader.load(materialURL, materials => {
    materials.preload();
    console.log("Loaded Materials", materials);
    const objLoader = new OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load(
      objectURL,
      object => {
        console.log("Loaded Obj", object);
        return object
      },
      progress => {
        console.log("Loading...", progress);
      },
      error => console.error('error!', error)
    );
    loader = objLoader;
  });
  console.log(loader)
  return loader;
};
