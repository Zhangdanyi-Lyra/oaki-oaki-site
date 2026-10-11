import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const stage = document.querySelector('#stage');
const status = document.querySelector('#status');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(33, 1, .01, 30);
camera.position.set(0, .12, 2.4);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
renderer.setClearColor(0xffffff, 0);
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.6));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.02;
stage.prepend(renderer.domElement);

// Keep the model's own texture and PBR finish; the previous glass shader hid it.
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment()).texture;
scene.add(new THREE.HemisphereLight(0xffffff, 0xc2b8ac, 1.25));
const key = new THREE.DirectionalLight(0xffffff, 1.8);
key.position.set(-2, 3, 4);
scene.add(key);
const fill = new THREE.DirectionalLight(0xe5e7ff, .75);
fill.position.set(3, 1, -3);
scene.add(fill);

const character = new THREE.Group();
scene.add(character);

function resize() {
  const w = Math.max(stage.clientWidth, 1);
  const h = Math.max(stage.clientHeight, 1);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h, false);
}
new ResizeObserver(resize).observe(stage);
resize();

let yaw = 0, pitch = 0, yawSpeed = 0, pitchSpeed = 0, last = 0, modelReady = false;
let dragging = false;
function addImpulse(dx, dy) {
  yawSpeed += THREE.MathUtils.clamp(dx, -.3, .3) * 14;
  pitchSpeed += THREE.MathUtils.clamp(dy, -.3, .3) * 8;
  yawSpeed = THREE.MathUtils.clamp(yawSpeed, -4, 4);
  pitchSpeed = THREE.MathUtils.clamp(pitchSpeed, -2, 2);
}
window.addEventListener('message', event => {
  if (event.origin !== location.origin) return;
  if (event.data?.type === 'berd-cube-drag-start') {
    dragging = true;
    yawSpeed = pitchSpeed = 0;
  } else if (event.data?.type === 'berd-cube-drag-end') {
    dragging = false;
  } else if (event.data?.type === 'berd-cube-impulse') {
    const dx = Number(event.data.deltaX) || 0;
    const dy = Number(event.data.deltaY) || 0;
    if (dragging && event.data.dragging) {
      yaw += THREE.MathUtils.clamp(dx, -.3, .3) * 6;
      pitch = THREE.MathUtils.clamp(pitch + THREE.MathUtils.clamp(dy, -.3, .3) * 2.5, -.38, .38);
      yawSpeed = THREE.MathUtils.clamp(dx * 8, -2, 2);
      pitchSpeed = THREE.MathUtils.clamp(dy * 4, -1, 1);
    } else {
      addImpulse(dx, dy);
    }
  }
});
let previousPointer = null;
renderer.domElement.addEventListener('pointermove', event => {
  if (previousPointer) {
    addImpulse((event.clientX - previousPointer.x) / Math.max(stage.clientWidth, 1),
      (event.clientY - previousPointer.y) / Math.max(stage.clientHeight, 1));
  }
  previousPointer = { x: event.clientX, y: event.clientY };
});
renderer.domElement.addEventListener('pointerleave', () => previousPointer = null);

function animate(time) {
  requestAnimationFrame(animate);
  const dt = Math.min((time - (last || time)) / 1000, .05);
  last = time;
  if (modelReady) {
    // Let pointer movement turn the word, then settle back to the reference view.
    yaw = Math.atan2(Math.sin(yaw), Math.cos(yaw));
    if (!dragging) {
      yawSpeed += (-yaw * 11 - yawSpeed * 6) * dt;
      pitchSpeed += (-pitch * 11 - pitchSpeed * 6) * dt;
      yaw += yawSpeed * dt;
      pitch = THREE.MathUtils.clamp(pitch + pitchSpeed * dt, -.38, .38);
    }
    character.rotation.set(pitch, yaw, 0);
  }
  renderer.render(scene, camera);
}
requestAnimationFrame(animate);

try {
  await MeshoptDecoder.ready;
  const loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);
  const gltf = await loader.loadAsync('assets/oaki-character.glb?v=20261007b');
  const model = gltf.scene;
  // In the supplied GLB, the word runs along Z and each letter is upright on Y.
  // Turn Z into screen X so the face reads left-to-right as in the reference.
  const oriented = new THREE.Group();
  oriented.rotation.y = -Math.PI / 2;
  oriented.add(model);
  oriented.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(oriented);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  const scale = 1.32 / Math.max(size.x, size.y, size.z);
  oriented.scale.setScalar(scale);
  oriented.position.copy(center).multiplyScalar(-scale);
  model.traverse(object => {
    if (!object.isMesh) return;
    object.material.side = THREE.DoubleSide;
    object.material.needsUpdate = true;
  });
  character.add(oriented);
  modelReady = true;
  document.body.classList.add('is-ready');
  status.textContent = '';
} catch (error) {
  console.error('Unable to load Oaki GLB', error);
  status.textContent = 'OAKI MODEL UNAVAILABLE';
}
