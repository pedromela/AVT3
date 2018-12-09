// JavaScript source code
/*function createMirror() {
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
}*/


function createMirror() {
    //var geometry = new THREE.PlaneBufferGeometry(400, 400);
    var geometry = new THREE.CircleGeometry(40, 32);
    var geometry2 = new THREE.CylinderBufferGeometry(0.1, 15 * Math.cos(Math.PI / 180 * 30), 0.1, 20, 1);

    var lake = new THREE.Object3D();
    var material = new THREE.MeshPhongMaterial({ emissive: 0.02, shininess: 5, wireframe: false, side: THREE.DoubleSide });
    materials[Phong][CAR]["Wheels"].color.setRGB(0.01, 0.01, 0.01);
    materials[Phong][CAR]["Wheels"].specular.setRGB(0.4, 0.4, 0.4);
    material.color.setRGB(33 / 254, 148 / 254, 206 / 254);
    material.opacity = 0.25;
    material.transparent = true;
    material.depthWrite = false;
    mesh = new THREE.Mesh(geometry, material);
    lake.add(mesh);
    lake.position.y = 15.2;
    lake.rotateX(- Math.PI / 2);
    lake.scale.set(1.5, 1, 0.9);
    scene.add(lake);
    //mesh.receiveShadow = true;

    var groundMirror = new THREE.Reflector(geometry, {
        clipBias: 0.003,
        textureWidth: window.innerWidth * window.devicePixelRatio,
        textureHeight: window.innerHeight * window.devicePixelRatio,
        color: 0x777777,
        recursion: 1
    });
    groundMirror.position.y = 15.1;
    groundMirror.rotateX(- Math.PI / 2);
    groundMirror.scale.set(1.5, 1, 0.9);
    scene.add(groundMirror);
}