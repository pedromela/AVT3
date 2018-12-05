function createCar(x, y, z)
{
  'use strict';

  //car = createCarInstance(car, x, y, z);

  car  = new THREE.Object3D();

  

  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.load('./car/Chevrolet_Camaro_SS_High.mtl',function (materials){
    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);

    objLoader.load('./car/Chevrolet_Camaro_SS_High.obj', function(mesh){
      mesh.rotation.y = Math.PI /2;
      //mesh.scale.set(3,3,3);
      car.add(mesh);
    });

  });

  car.position.x = x;
  car.position.y = y; 
  car.position.z = z;

  var cardof = new THREE.Vector3(1, 0, 0);
  car.castShadow = true;
  car.userData = { vel: 0, acc: 0, dist: 0, type: CAR, dof: cardof, drag: 20};

  scene.add(car);

  var target1 = createTarget(car, 10, 0, -2);
  var target2 = createTarget(car, 10, 0, 2);

    lanterns.push(addLanternLight(car, target1, -8.5, 1, -1));
    lanterns.push(addLanternLight(car, target2, -8.5, 1, 1));
}


function createCarInstance(obj, x, y, z)
{
  'use strict';

  obj = new THREE.Object3D();

  addFrontCar(obj, 0, 0, 0);
  addCockpitCar(obj, 0, 0.75, 0);
  addWheelCar(obj, -1.5, -1, 1.5);
  addWheelCar(obj, -1.5, -1, -1.5);
  addWheelCar(obj, 1.5, -1, 1.5);
  addWheelCar(obj, 1.5, -1, -1.5);
  addSpoiler(obj,-2.25,0.75,0);

  obj.position.x = x;
  obj.position.y = y; 
  obj.position.z = z;
  return obj;
}


function createTarget(obj, x, y, z)
{
  var target = new THREE.Object3D();
  target.position.set(x, y, z);
 // target.add(new THREE.AxisHelper(10));
  obj.add(target);
  return target;
}

function addFrontCar(obj, x, y, z)
{
  'use strict';

  var vertices = [
    new THREE.Vector3(-2.5, 0, 1.5),    //0
    new THREE.Vector3(-2.5, 0, -1.5),   //1
    new THREE.Vector3(2.5, 0, -1.5),    //2
    new THREE.Vector3(2.5, 0, 1.5),     //3
    new THREE.Vector3(-2.5, -1, 1.5),   //4
    new THREE.Vector3(-2.5, -1, -1.5),  //5
    new THREE.Vector3(3, -1, -1.5),     //6
    new THREE.Vector3(3, -1, 1.5),      //7
  ];

  var faces = [
    new THREE.Face3(0,1,2),
    new THREE.Face3(0,2,3),

    new THREE.Face3(4,5,7),
    new THREE.Face3(5,6,7),

    new THREE.Face3(2,6,3),
    new THREE.Face3(6,7,3),

    new THREE.Face3(0,4,3),
    new THREE.Face3(4,7,3),

    new THREE.Face3(1,5,2),
    new THREE.Face3(5,6,2),

    new THREE.Face3(0,4,5),
    new THREE.Face3(0,5,1)
  ];

  geometry = createGeo(vertices, faces);

  material = materials[Phong][CAR]["Base"];

  mesh = new THREE.Mesh(geometry,material);
  mesh.userData = {Phong: material, Lambert: materials[Lambert][CAR]["Base"], Basic: materials[Basic][CAR]["Base"]};
  mesh.position.set(x, y, z);
  obj.castShadow = true; 
  obj.receiveShadow = true;
  obj.add(mesh);
}

function addCockpitCar(obj, x, y, z)
{
  'use strict';

  var vertices = [
    new THREE.Vector3(-1, 0, 1.5),    //0
    new THREE.Vector3(-1, 0, -1.5),   //1
    new THREE.Vector3(1, 0, -1.5),    //2
    new THREE.Vector3(1, 0, 1.5),     //3
    new THREE.Vector3(-1.5, -0.75, 1.5),   //4
    new THREE.Vector3(-1.5, -0.75, -1.5),  //5
    new THREE.Vector3(2, -0.75, -1.5),     //6
    new THREE.Vector3(2, -0.75, 1.5),      //7
  ];

  var faces = [
    new THREE.Face3(0,1,2),
    new THREE.Face3(0,2,3),

    new THREE.Face3(4,5,7),
    new THREE.Face3(5,6,7),

    new THREE.Face3(2,6,3),
    new THREE.Face3(6,7,3),

    new THREE.Face3(0,4,3),
    new THREE.Face3(4,7,3),

    new THREE.Face3(1,5,2),
    new THREE.Face3(5,6,2),

    new THREE.Face3(0,4,5),
    new THREE.Face3(0,5,1)
  ];

  geometry = createGeo(vertices, faces);

  material = materials[Phong][CAR]["Cockpit"];

  mesh = new THREE.Mesh(geometry, material);
  mesh.userData = {Phong: material, Lambert: materials[Lambert][CAR]["Cockpit"], Basic: materials[Basic][CAR]["Cockpit"]};
  mesh.position.set(x, y, z);

  obj.add(mesh);
}

function addSpoiler(obj,x,y,z)
{
	'use strict';

  var vertices = [
    new THREE.Vector3(-0.25, 0, 1.5),    //0
    new THREE.Vector3(-0.25, 0, -1.5),   //1
    new THREE.Vector3(0.25, -0.25, -1.5), //2
    new THREE.Vector3(0.25, -0.25, 1.5),  //3
    new THREE.Vector3(-0.25, -0.75, 1.5),   //4
    new THREE.Vector3(-0.25, -0.75, -1.5),  //5
    new THREE.Vector3(0.25, -0.75, -1.5),   //6
    new THREE.Vector3(0.25, -0.75, 1.5),    //7
  ];

  var faces = [
    new THREE.Face3(0,1,2),
    new THREE.Face3(0,2,3),

    new THREE.Face3(1,5,2),
    new THREE.Face3(5,6,2),

    new THREE.Face3(0,4,3),
    new THREE.Face3(4,7,3),
  ];

  geometry = createGeo(vertices, faces);

  material = materials[Phong][CAR]["Spoiler"];

  mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  mesh.userData = {Phong: material, Lambert: materials[Lambert][CAR]["Spoiler"], Basic: materials[Basic][CAR]["Spoiler"]};

  obj.add(mesh);

}


function addWheelCar(obj, x, y, z)
{
  'use strict';

  var vertices = [
    new THREE.Vector3(0.7, 0, -0.25),     //0
    new THREE.Vector3(0.5, 0.5, -0.25),   //1
    new THREE.Vector3(0, 0.7, -0.25),     //2
    new THREE.Vector3(-0.5, 0.5, -0.25),  //3
    new THREE.Vector3(-0.7, 0, -0.25),    //4
    new THREE.Vector3(-0.5, -0.5, -0.25), //5
    new THREE.Vector3(0, -0.7, -0.25),    //6
    new THREE.Vector3(0.5, -0.5, -0.25),  //7
    //other side
    new THREE.Vector3(0.7, 0, 0.25),      //8
    new THREE.Vector3(0.5, 0.5, 0.25),    //9
    new THREE.Vector3(0, 0.7, 0.25),      //10
    new THREE.Vector3(-0.5, 0.5, 0.25),   //11
    new THREE.Vector3(-0.7, 0, 0.25),     //12
    new THREE.Vector3(-0.5, -0.5, 0.25),  //13
    new THREE.Vector3(0, -0.7, 0.25),     //14
    new THREE.Vector3(0.5, -0.5, 0.25),   //15
    //center points
    new THREE.Vector3(0, 0, -0.25),        //16
    new THREE.Vector3(0, 0, 0.25)          //17
  ];

  var faces = [
    new THREE.Face3(16,0,1),
    new THREE.Face3(16,1,2),
    new THREE.Face3(16,2,3),
    new THREE.Face3(16,3,4),
    new THREE.Face3(16,4,5),
    new THREE.Face3(16,5,6),
    new THREE.Face3(16,6,7),
    new THREE.Face3(16,7,0),
    //other side
    new THREE.Face3(17,8,9),
    new THREE.Face3(17,9,10),
    new THREE.Face3(17,10,11),
    new THREE.Face3(17,11,12),
    new THREE.Face3(17,12,13),
    new THREE.Face3(17,13,14),
    new THREE.Face3(17,14,15),
    new THREE.Face3(17,15,8),
    //sides
    new THREE.Face3(0,8,9),
    new THREE.Face3(0,9,1),
    new THREE.Face3(1,9,10),
    new THREE.Face3(1,10,2),
    new THREE.Face3(2,10,11),
    new THREE.Face3(2,11,3),
    new THREE.Face3(3,11,12),
    new THREE.Face3(3,12,4),
    new THREE.Face3(4,12,13),
    new THREE.Face3(4,13,5),
    new THREE.Face3(5,13,14),
    new THREE.Face3(5,14,6),
    new THREE.Face3(6,14,15),
    new THREE.Face3(6,15,7),
    new THREE.Face3(7,15,8),
    new THREE.Face3(7,8,0)
  ];

  geometry = createGeo(vertices, faces);

  material = materials[Phong][CAR]["Wheels"];

  mesh = new THREE.Mesh(geometry, material);

  mesh.position.set(x, y, z);
  mesh.userData = {Phong: materials[Phong][CAR]["Wheels"], Lambert: materials[Lambert][CAR]["Wheels"], Basic: materials[Basic][CAR]["Wheels"]};

  obj.add(mesh);
}

function createGeo(vertices, faces){

    var geom = new THREE.Geometry();
    geom.vertices = vertices;
    geom.faces = faces;
    geom.computeFaceNormals();
    geom.computeVertexNormals();
    geom.mergeVertices();

    return geom;
}

function addLives(n)
{
  var life;
  for(var i = 0; i < n; i++){
    carLives.push(createCarInstance(life, -window.innerWidth/12 + i* 10, 0, -window.innerHeight/12));
    scene2.add(carLives[i]);

    carLives[i].traverse(function(child)
    {
      if(child instanceof THREE.Mesh){child.material = child.userData.Basic;}
    });
  }
}

function resetCar()
{
  car.userData.vel = 0;
  car.position.set(30, 17, 10);
  car.rotation.y = 0;

  nlives = 5;

  for (var i = 0; i < nlives; i++) {
    carLives[i].visible = true;
  }
}