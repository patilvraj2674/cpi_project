// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // Updated aspect ratio
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight); // Fixed height
document.getElementById('container').appendChild(renderer.domElement);

// Load 3D model
const loader = new THREE.GLTFLoader();
let gltf;
loader.load(modelUrl, function (gltfScene) {
    gltf = gltfScene;
    scene.add(gltfScene.scene);
}, undefined, function (error) {
    console.error(error);
});

// Add lighting to the scene
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 10, 10).normalize();
scene.add(light);

// Set up orbit controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Update controls
    renderer.render(scene, camera);
}
animate();

// Handle window resizing
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight); // Fixed height
    camera.aspect = window.innerWidth / window.innerHeight; // Updated aspect ratio
    camera.updateProjectionMatrix();
});
