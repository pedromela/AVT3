function createScene(ncherios1,ncherios2,noranges,nbutters){
	'use strict';

	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xA9A8Ad );
	
	//scene.background = fogColor;
	scene.autoUpdate = true;
	//scene.fog = new THREE.Fog(fogColor, 0.0025, 150);

	createFloor(0, -10, 0);
    createCar(0, 17, 55);
    createBillboard();
    createMirror();

	addCheerios(ncherios1); //creates the iner ring
  	addCheerios(ncherios2); //creates the outher ring

  	addButter(nbutters);
  	addOranges(noranges);	
	
	createDirectionalLight();
	createAmbientLight();
	addCandles(numCandles);
	addLight( 0.55, 0.9, 0.5, 400, 125, 150 );

}

function createScene2()
{
    scene2 = new THREE.Scene();
    scene.autoUpdate = true;
	//scene2.add(new THREE.AxisHelper(10));
	addLives(nlives);
}
