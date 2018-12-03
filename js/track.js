function createFloor(x,y,z){

    'use strict';
    track  = new THREE.Object3D();
    material = 	materials[Phong][TRACK]["Base"];

	var texture = new THREE.TextureLoader().load( "./cloth.jpg" );
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 10, 10 );
	
	
    material.map = texture;
	
    geometry = new THREE.CubeGeometry(400,50,400);
    mesh = new THREE.Mesh(geometry,material);
	mesh.userData = {Phong: material, Lambert: materials[Lambert][TRACK]["Base"], Basic: materials[Basic][TRACK]["Base"]};

    mesh.userData.Lambert.map = texture;
    mesh.userData.Basic.map = texture;
   

    track.add(mesh);
    
	
	track.userData = {zMin: -200, zMax: 200, xMin: -200, xMax: 200} 

	track.castShadow = true;
    scene.add(track);

    track.position.x = x;
    track.position.y = y;
    track.position.z = z;
}