function createDirectionalLight()
{
        var pointColor = "#ffffff";
        directionalLight = new THREE.DirectionalLight(pointColor);
        directionalLight.position.set(-30, 30, 0);

  		directionalLight.castShadow = true;
          
  		    directionalLight.shadow.camera.near = 200;
          directionalLight.shadow.camera.far = 100;
          directionalLight.shadow.camera.left = -100;
          directionalLight.shadow.camera.right = 100;
          directionalLight.shadow.camera.top = 50;
          directionalLight.shadow.camera.bottom = 20;

          directionalLight.distance = 50;
          directionalLight.intensity = 1;
          directionalLight.shadow.mapSize.height = 100;
          directionalLight.shadow.mapSize.width = 100;
  		directionalLight.shadowMapDarkness = 0.5;


        scene.add(directionalLight);
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
      return spotLight;
}

function addLanternLight(obj, target, x, y, z)
{
  var lantern = createSpotLight(x, y, z);
  lantern.target = target;
  //lantern.add(new THREE.AxisHelper(10));
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
