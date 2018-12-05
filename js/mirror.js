// JavaScript source code
function createMirror() {
    var geometry = new THREE.PlaneBufferGeometry(400, 400);
    var groundMirror = new THREE.Reflector(geometry, {
        clipBias: 0.003,
        textureWidth: window.innerWidth * window.devicePixelRatio,
        textureHeight: window.innerHeight * window.devicePixelRatio,
        color: 0x777777,
        recursion: 1
    });
    groundMirror.position.y = 14.9;
    groundMirror.rotateX(- Math.PI / 2);
    scene.add(groundMirror);
}