function addCheerios(ncherios)
{
  'use strict';
  var angle = 2 * Math.PI / ncherios;

  /*var atmoShader = {
      side: THREE.BackSide,
      // blending: THREE.AdditiveBlending,
      transparent: true,
      lights: true,
      uniforms: THREE.UniformsUtils.merge([
          THREE.UniformsLib["common"],
          THREE.UniformsLib["lights"]
      ]),
      vertexShader: [
          "varying vec3 vViewPosition;",
          "varying vec3 vNormal;",
          "void main() {",
          THREE.ShaderChunk["beginnormal_vertex"],
          THREE.ShaderChunk["defaultnormal_vertex"],
          "	vNormal = normalize( transformedNormal );",
          "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
          "vViewPosition = -mvPosition.xyz;",
          "gl_Position = projectionMatrix * mvPosition;",
          "}"
      ].join("\n"),
      fragmentShader: [
          THREE.ShaderChunk["common"],
          THREE.ShaderChunk["bsdfs"],
          THREE.ShaderChunk["lights_pars_begin"],
          THREE.ShaderChunk["lights_phong_pars_fragment"],
          "void main() {",
          "vec3 normal = normalize( -vNormal );",
          "vec3 viewPosition = normalize( vViewPosition );",
          "#if NUM_DIR_LIGHTS > 0",
          "vec3 dirDiffuse = vec3( 0.0 );",
          "for( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {",
          "vec4 lDirection = viewMatrix * vec4( directionalLights[i].direction, 0.0 );",
          "vec3 dirVector = normalize( lDirection.xyz );",
          "float dotProduct = dot( viewPosition, dirVector );",
          "dotProduct = 1.0 * max( dotProduct, 0.0 ) + (1.0 - max( -dot( normal, dirVector ), 0.0 ));",
          "dotProduct *= dotProduct;",
          "dirDiffuse += max( 0.5 * dotProduct, 0.0 ) * directionalLights[i].color;",
          "}",
          "#endif",
          //Fade out atmosphere at edge
          "float viewDot = abs(dot( normal, viewPosition ));",
          "viewDot = clamp( pow( viewDot + 0.6, 10.0 ), 0.0, 1.0);",
          "vec3 color = vec3( 0.05, 0.09, 0.13 ) * dirDiffuse;",
          "gl_FragColor = vec4( color, viewDot );",
          "}"
      ].join("\n")
  };
  var earthAtmoMat = new THREE.ShaderMaterial(atmoShader);*/

  for(var i = 0; i < ncherios; i++)
  {
   	var stepangle = angle*i;
   	var torus = new THREE.Object3D();
   	var geometry = new THREE.TorusGeometry( 1, 0.5, 6, 50);
	geometry.castShadow = true; 
    geometry.receiveShadow = true;
    var material = 	materials[Phong][CHEERIO]["Base"];
    var mesh = new THREE.Mesh(geometry, material);

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