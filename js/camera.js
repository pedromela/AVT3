function createCamera(){
 	'use strict';
 	aspect = window.innerWidth/window.innerHeight;
 	



	/***********************	OrthographicCamera  ********************************/
 	
 	cameraOrtog = new THREE.OrthographicCamera( frustum / - 8 * aspect, frustum / 8 * aspect, frustum / 8, frustum / - 8, -200, 500 );
 	cameraOrtog.position.x = 0;
 	cameraOrtog.position.y = 150;
 	cameraOrtog.position.z = 0;

 	cameraOrtog.lookAt(scene.position);
	cameraOrtog.useQuaternion = true;

 	cameras[Orto] = cameraOrtog;
 	
	/*************************************************************************************/


	/***********************	Car Lives OrthographicCamera  ****************************/
 	
 	cameraLives = new THREE.OrthographicCamera( frustum / - 8 * aspect, frustum / 8 * aspect, frustum / 8, frustum / - 8, -200, 500 );
 	cameraLives.position.x = 0;
 	cameraLives.position.y = 50;
 	cameraLives.position.z = 0;

 	cameraLives.lookAt(scene2.position);

 	//cameraLives.add(new THREE.AxisHelper(20));
 	
	/*************************************************************************************/



	/***********************	 Car camera defenition ********************************/	
 	
 	cameraCar = new THREE.PerspectiveCamera( 90, aspect, 0.1, 500 );
	
	cameraCar.position.x = -16;
 	cameraCar.position.y = 8;
 	cameraCar.position.z = 0;
	cameraCar.useQuaternion = true;

	cameraCar.lookAt(new THREE.Vector3(1,-1,0));

	cameras[Definition] = cameraCar;
	


	/*************************************************************************************/
	


	/***********************	 Persepective Camera ********************************/

 	
 	cameraPerspective = new THREE.PerspectiveCamera(100, aspect, 0.1, 500 ); 
	
	cameraPerspective.position.x = 0;
 	cameraPerspective.position.y = 120;
 	cameraPerspective.position.z = 50;
	
	cameraPerspective.lookAt(scene.position);

	cameras[Perspective] = cameraPerspective;


	/*************************************************************************************/


 
 	
 	scene.add(cameras[Orto]);
 	scene.add(cameras[Perspective]);
 	car.add(cameras[Definition]);
 	scene2.add(cameraLives);
}