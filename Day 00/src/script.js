import './style.css'
import * as THREE from 'three';

// canvas
const  canvas = document.querySelector(".myCanvas");

// Basic scene
const scene=  new THREE.Scene();

// 3D Cube
const geometry = new THREE.BoxGeometry(1,1,1);
const material=new THREE.MeshBasicMaterial({color:"#ffcc00"});
const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);

const POV=75;
const cameraWidth= 600;
const cameraHeight=600;

const camera= new THREE.PerspectiveCamera(POV, cameraWidth / cameraHeight);
const axisHelper= new THREE.AxesHelper(5)
camera.position.z = 10;
camera.position.y = 2
camera.position.x = 10;
camera.lookAt(0,0,-0);

scene.add(camera);
scene.add(axisHelper);

const renderer= new THREE.WebGLRenderer({
    canvas: canvas
})
// modification
// for single target axis
// mesh.position.z = -3;
// mesh.position.y = 3;

// for multiple axis transformation
mesh.position.set(0,0,0)
// mesh.scale.x=2;
// mesh.scale.y=2;
// mesh.scale.z=3
mesh.scale.set(2,1,1)

// mesh.rotation.y=3.14159
mesh.rotation.y=Math.PI*0.5;
mesh.rotation.x=Math.PI/5;
mesh.rotation.z=Math.PI*6;


renderer.setSize(cameraWidth, cameraHeight);
renderer.render(scene,camera)