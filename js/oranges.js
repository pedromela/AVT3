function addOranges(noranges)
{
  'use strict';

  var len = trackCoord.length;
  var value = [];
  var randomI = 0;
  var iter = 0;
  memory = [];

  while(iter < noranges)
  {
    randomI = Math.floor(Math.random() * len);
    value = trackCoord[randomI];

    if (!memory.includes(randomI)){
        var orange = createOrange(value[0],19,value[1]);
        oranges.push(orange);
        memory.push(randomI);
        iter++;
    }
  }

}

function createOrange(x,y,z){
  'use strict';
  var orange  = new THREE.Object3D();

  var material  = materials[Phong][ORANGE]["Base"];
  var geometry  = new THREE.SphereGeometry(4,10,10);
  var mesh = new THREE.Mesh(geometry,material);
  mesh.userData = {Phong: material, Lambert: materials[Lambert][ORANGE]["Base"], Basic: materials[Basic][ORANGE]["Base"]};

  var randomVel = getRandomInt(10, 30);
  orange.userData = { vel: randomVel, distX: x, type: ORANGE};
  
  orange.add(mesh);
  orange.position.set(x,y,z);

  addOrangeLeaf(x, y, z, orange);
  
  orange.castShadow = true;
  
  scene.add(orange);
  
  return orange;
}

function addOrangeLeaf(x,y,z, orange){
	'use strict';


	var geometry  = new THREE.SphereGeometry(2,3,1);
	var material = materials[Phong][ORANGE]["Leaf"];
	var mesh = new THREE.Mesh( geometry, material );

	mesh.position.set( 0, 5, 0 );
	mesh.userData = {Phong: material, Lambert: materials[Lambert][ORANGE]["Leaf"], Basic: materials[Basic][ORANGE]["Leaf"]};

	orange.add(mesh);

}

function newPosition(orange)
{
    var len = trackCoord.length;
    var value = [];
    var randomI = 0;
    
    randomI = Math.floor(Math.random() * len);
    value = trackCoord[randomI];

    orange.position.set(value[0],19,value[1]);
    
    orange.userData.distX = value[0];
}

function resetOranges()
{
    for (var i = 0; i < numOranges; i++) {
      newPosition(oranges[i]);

      var randomVel = getRandomInt(10, 30);
      oranges[i].userData.vel = randomVel;
    }
}