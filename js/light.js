function createDirectionalLight()
{
        var pointColor = "#ffffff";
/*         directionalLight = new THREE.DirectionalLight(pointColor);
        directionalLight.position.set( 500, 100, 150 );

          
  		directionalLight.shadow.camera.near = 0.35;
        directionalLight.shadow.camera.far = 100;
        directionalLight.shadow.camera.left = -100;
        directionalLight.shadow.camera.right = 100;
        directionalLight.shadow.camera.top = 50;
        directionalLight.shadow.camera.bottom = -50;

        directionalLight.distance = 50;
        directionalLight.intensity = 1;
        directionalLight.shadow.mapSize.height = 100;
        directionalLight.shadow.mapSize.width = 100;
  		directionalLight.shadowMapDarkness = 0.5;
		directionalLight.castShadow = true;
		directionalLight.receiveShadow = true;

        scene.add(directionalLight);  */

		
		// Add directional light
		
		var spot_light = new THREE.DirectionalLight(pointColor);
		spot_light.position.set(  200, 100, 75  );
		spot_light.target = scene;
		spot_light.castShadow = true;
		spot_light.receiveShadow = true;
		//spot_light.shadowMapWidth = 2048;
		//spot_light.shadowMapHeight = 2048;
		spot_light.shadowDarkness = 0.8;
		spot_light.shadow.camera.near = 0.35;
        spot_light.shadow.camera.left = -100;
        spot_light.shadow.camera.right = 100;
        spot_light.shadow.camera.top = -100;
        spot_light.shadow.camera.bottom = 100;
		
		scene.add(spot_light);		
		
		//Create a helper for the shadow camera (optional)
		var helper = new THREE.CameraHelper( spot_light.shadow.camera );
		scene.add( helper );
		
}

function createAmbientLight()
{
	    var ambiColor = "#ffffff";
        var ambientLight = new THREE.AmbientLight(ambiColor);
        scene.add(ambientLight);

}


function createCandle(x,y,z)
{
        'use strict';
        var candle = new THREE.PointLight(0xD3D3D3,2,120,2);
        candle.position.set(x,y,z);
		candle.castShadow = true;            // default false

        //candle.add(new THREE.AxisHelper(10));
        candles.push(candle);
        scene.add(candle);
}


function addCandles(numCandles)
{
        'use strict';
        createCandle(-55,20,-8);
        createCandle(20,20,30);
        createCandle(20,20,-30);
        createCandle(-20,20,30);
        createCandle(-20,20,-30);
        createCandle(55,20,-8);
}


function createSpotLight(x, y, z)
{
     'use strict';
      var spotLight = new THREE.SpotLight(0xffffff,3,100,0.2,0.2,1.5);
      spotLight.position.set(x,y,z);
	  spotLight.castShadow = true;
	  spotLight.receiveShadow = true;
	  spotLight.shadow.darkness = 0.5;
	  spotLight.shadow.camera.near = 0.35;
      return spotLight;
}

function addLanternLight(obj, target, x, y, z)
{
  var lantern = createSpotLight(x, y, z);
  lantern.target = target;
  //lantern.add(new THREE.AxisHelper(10));
  lantern.castShadow = true;
  lantern.receiveShadow = true;
  lantern.shadow.darkness = 0.5;
  lantern.shadow.camera.near = 0.35;
  car.add(lantern);
  return lantern;
}


function addLight( h, s, l, x, y, z ) {
	var light = new THREE.PointLight( 0xffffff, 1.5, 2000 );
	light.color.setHSL( h, s, l );
	light.position.set( x, y, z );
	scene.add( light );
	var lensflare = new THREE.Lensflare();
	lensflare.addElement( new THREE.LensflareElement( textureFlare0, 700, 0, light.color ) );
	lensflare.addElement( new THREE.LensflareElement( textureFlare3, 60, 0.6 ) );
	lensflare.addElement( new THREE.LensflareElement( textureFlare3, 70, 0.7 ) );
	lensflare.addElement( new THREE.LensflareElement( textureFlare3, 120, 0.9 ) );
	lensflare.addElement( new THREE.LensflareElement( textureFlare3, 70, 1 ) );
	light.add( lensflare );
}
