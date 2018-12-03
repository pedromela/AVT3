function addCheerios(ncherios)
{
  'use strict';
  var angle = 2 * Math.PI / ncherios;

  for(var i = 0; i < ncherios; i++)
  {
   	var stepangle = angle*i;
   	var torus = new THREE.Object3D();
   	var geometry = new THREE.TorusGeometry( 1, 0.5, 6, 50);
	geometry.castShadow = true; 
    geometry.receiveShadow = true;
   	var material = 	materials[Phong][CHEERIO]["Base"];
   	var mesh = new THREE.Mesh( geometry, material );

	mesh.userData = {Phong: material, Lambert: materials[Lambert][CHEERIO]["Base"], Basic: materials[Basic][CHEERIO]["Base"]};
	mesh.rotateX(Math.PI/2);
  torus.add(mesh);

  var cheeriodof = new THREE.Vector3(1, 0, 0);	//placeholder dof
	torus.userData = {vel: 0 , acc: 0, dist: 0, type:CHEERIO, dof: cheeriodof, drag: 40, x: 0, z: 0};
	torus.position.x = torus.userData.x = (Math.cos(stepangle)*ncherios*1.5);
  torus.position.y = 16;
  torus.position.z = torus.userData.z = (Math.sin(stepangle)*ncherios*0.9);

	cheerios.push(torus);

  scene.add(torus);
  }

}

function resetCheerios(ncherios)
{
  'use strict';

  var angle = 2 * Math.PI / ncherios;

  for(var i = 0; i < ncherios; i++)
  {
    var stepangle = angle*i;
    
    var cheeriodof = new THREE.Vector3(1, 0, 0);  //placeholder dof
    cheerios[i].userData.vel = 0;
    cheerios[i].userData.dist = 0;
    cheerios[i].position.x = cheerios[i].userData.x;
    cheerios[i].position.z = cheerios[i].userData.z;
  }

}