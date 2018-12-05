function addButter(nbutters)
{
	'use strict';

	var len = trackCoord.length;
	var value = [];
	var randomI = 0;
	var iter=0;
	
	while(iter < nbutters)
	{
		randomI = Math.floor(Math.random() * len);
		value = trackCoord[randomI];

		if (!memory.includes(randomI)) 
		{
			var butter = createButter(value[0],19,value[1]);
			memory.push(randomI);
			butters.push(butter);
			iter++;
		};
	}
}

function createButter(x,y,z){
  'use strict';

  var butter  = new THREE.Object3D();

  var geometry = new THREE.CubeGeometry(8,8,8);
  var material = materials[Phong][BUTTER]["Base"];

  var cube = new THREE.Mesh( geometry, material );
  cube.castShadow = true; 
  cube.receiveShadow = true;
  cube.userData = {Phong: material, Lambert: materials[Lambert][BUTTER]["Base"], Basic: materials[Basic][BUTTER]["Base"]}
  butter.userData = {type: BUTTER};

  butter.add(cube);
  butter.position.set(x,y,z);
  scene.add(butter);
  return butter;
}