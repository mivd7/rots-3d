import {
  Scene,
  PointLight,
  AmbientLight,
  WebGLRenderer,
  Vector2
} from 'three';

export default () => {
  let renderer = new WebGLRenderer()
  let scene = new Scene();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor( 0xeeeeee, 1 );
  
  var controls = new OrbitControls( camera, renderer.domElement );
  
  let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 20000);
  camera.position.set(2, 5, 20);
  function resize() {

    var aspect = window.innerWidth / window.innerHeight;
    var texAspect = bgWidth / bgHeight;
    var relAspect = aspect / texAspect;

    bgTexture.repeat = new Vector2(Math.max(relAspect, 1), Math.max(1 / relAspect, 1));
    bgTexture.offset = new Vector2(-Math.max(relAspect - 1, 0) / 2, -Math.max(1 / relAspect - 1, 0) / 2);

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
  }

  function animate() {
    requestAnimationFrame(animate);
    time = clock.getElapsedTime();

    exampleObject.rotation.x = 0.4 * Math.sin(time / 2);
    exampleObject.rotation.y = Math.cos(time);
    exampleObject.rotation.z = Math.sin(time / 2);

    renderer.render(scene, camera);
    controls.update();

  }

  function loadScene () {
    var bgTexture = loader.load("./assets/rots1.jpg",
      function (texture) {
        var img = texture.image;
        bgWidth = img.width;
        bgHeight = img.height;
        resize();
      }
    );
    scene.background = bgTexture;
    bgTexture.wrapS = THREE.MirroredRepeatWrapping;
    bgTexture.wrapT = THREE.MirroredRepeatWrapping;

    var sceneLight = new PointLight(0xeeeeee, 1, Infinity);
    sceneLight.position.set(10, 50, 20);
    scene.add(sceneLight);

    var lightAmb = new AmbientLight(0xff77ff);
    scene.add(lightAmb);
  }
  
  loadScene();
  animate();
  return {scene, renderer}
}
