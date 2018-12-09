function createFloor(x,y,z){

    'use strict';
    track  = new THREE.Object3D();
    material = 	materials[Phong][TRACK]["Base"];

    var texture = new THREE.TextureLoader().load("./stone.jpg");
    var mapHeight = new THREE.TextureLoader().load("./normal.jpg");

    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 10, 10 );

    mapHeight.wrapS = THREE.RepeatWrapping;
    mapHeight.wrapT = THREE.RepeatWrapping;
    mapHeight.repeat.set(10, 10);
	
    material.map = texture;
    material.bumpMap = mapHeight;
    material.bumpScale = 100;
    /*material.opacity = 0.85;
    material.transparent = true;
    material.depthWrite = false;*/
	
    geometry = new THREE.CubeGeometry(400,50,400);
    mesh = new THREE.Mesh(geometry,material);
	mesh.receiveShadow = true;

	mesh.userData = {Phong: material, Lambert: materials[Lambert][TRACK]["Base"], Basic: materials[Basic][TRACK]["Base"]};

    mesh.userData.Lambert.map = texture;
    mesh.userData.Basic.map = texture;

    mesh.receiveShadow = true;
    track.add(mesh);
    
	
	track.userData = {zMin: -200, zMax: 200, xMin: -200, xMax: 200} 

    mesh.receiveShadow = true;
    scene.add(track);

    track.position.x = x;
    track.position.y = y;
    track.position.z = z;

    //car = createCarInstance(car, x, y, z);

    /*terrain  = new THREE.Object3D();

    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.load('./terrain/terrain.mtl',function (materials){
        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load('./terrain/terrain.obj', function(mesh){
            mesh.rotation.y = Math.PI /2;
            //mesh.scale.set(3,3,3);
            terrain.add(mesh);
        });

    });
    scene.add(terrain);

    terrain.position.set(0, 20, 55);*/
}