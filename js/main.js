var scene, scene2, renderer;

var textureLoader = new THREE.TextureLoader();
var textureFlare0 = textureLoader.load( 'textures/lensflare/lensflare0.png' );
var textureFlare3 = textureLoader.load( 'textures/lensflare/lensflare3.png' );

var insetHeight = 10;
var insetWidth =  10;

var geometry, material, mesh;

var car, track;
var cameraOrtog, cameraPerspective, cameraCar, cameraLives, cameraAtual;

var trackCoord = [[-100,15],[20,-50],[-30,110],[-10,-100],[-20,20],[-2,-70],[-8,20],[-32,20],[120,-25],[170,-22],[34,-42],[5,-50],[50,20],[5,90],[-25,-45],[-5,30],[-150,-10],[-25,-20],[-3,-30],[20,-55],[-32,-47],[16,-40],[21,-180],[39,-49]];
var memory =[];
var oranges = [];
var cheerios = [];
var butters = [];
var numOranges = 7;
var numCheerios = 130;
var innerCheerios = 50;
var outerCheerios = 80;
var numButter = 5;
var carradius = 3;
var butterradius = Math.sqrt(32);
var orangeradius = 4;
var cheerioradius = 1.5;
var fogColor = 0xA9A8AD;
var fogFar = [ 75, 250, 150 ]; //Default distances
var clock = new THREE.Clock();
var oldmoment = 0;

var cubeShadow;

var leftPressed = false;
var rightPressed = false;


var changeFrame = false;
var changeMaterial = false;
var fogOFF = false;

var frustum = 800;
var aspect;

var CAR = 0;
var ORANGE = 1;
var CHEERIO = 2;
var BUTTER = 3;
var TRACK = 4;

var Lambert = 0;
var Phong = 1;
var Basic = 2;
var materials = [[],[],[]];


var Definition = 0;
var Orto = 1;
var Perspective = 2;
var cameras = [[], [], []];

var delta;

var IGNORE = numCheerios;

var candles = [];
var removeCandle = false;
var numCandles = 6;

var removeDirectional = false;
var directionalLight;

var materialsBasic = false; 

var isPause = false;

var lanterns = [];
var toggleLantern = false;
var numLanterns = 2;

var box_pause;

var carLives = [];
var nlives = 5;
var gameOver = false;


var lightPosition4D = new THREE.Vector4();
			
function render(cameratype){
	'use strict'

	renderer.clear();
	
	renderer.setViewport(0, 0, window.innerWidth, window.innerHeight);
	
	if(fogOFF){
		var fogFar = [ -1, -1, -1 ]; //fog gone
	}
	else{
		var fogFar = [ 75, 250, 150 ];	//fog active
	}

	switch (cameratype) {
			
			case "cameraCar":
				scene.fog = new THREE.Fog(fogColor, 0.025, fogFar[0]);
				renderer.render(scene, cameraCar);
				break;
			
			case "cameraOrtog":
				scene.fog = new THREE.Fog(fogColor, 0.0025, fogFar[1]);
				renderer.render(scene, cameraOrtog);
				break;
			
			case "cameraPerspective":
				scene.fog = new THREE.Fog(fogColor, 0.0025, fogFar[2]);
				renderer.render(scene, cameraPerspective);
				break;
			
			default:
				renderer.render(scene, cameraOrtog);
				break;
		}
		
	renderer.clearDepth();
	renderer.setViewport(0, 0, window.innerWidth, window.innerHeight);
	renderer.render(scene2, cameraLives);
}





function init(){
	'use strict';

	renderer = new THREE.WebGLRenderer({antialias: true});

	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

	renderer.autoClear = false; //importante
	
	renderer.shadowMap.enabled = true;
	renderer.shadowMapType = THREE.PCFSoftShadowMap;
	
	fillMaterials();

	cameraAtual = "cameraOrtog";

	createScene(innerCheerios,outerCheerios,7,5); // arguments: 1st- number of 
	createScene2();
	initMessages();

	createCamera();

	clock.start();

	render(cameraAtual);

	window.addEventListener("resize", onResize);
	window.addEventListener("keydown", onKeyDown);
	window.addEventListener("keyup", onKeyUp);
}



function getRandomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function initMessages()
{
	var geometry = new THREE.BoxGeometry( 200, 50, 100 );
  	var materialPause = new THREE.MeshBasicMaterial();
  	var materialGameOver = new THREE.MeshBasicMaterial();

  	var texturePause = new THREE.TextureLoader().load( "./paused.png" );
  	var textureGameOver = new THREE.TextureLoader().load( "./gameover.jpg" );
	
	materialPause.map = texturePause;
	materialGameOver.map = textureGameOver;

	materialPause.transparent = true;
	materialPause.opacity = 0;
	
	materialGameOver.transparent = true;
	materialGameOver.opacity = 0;

	texturePause.wrapS = THREE.RepeatWrapping;
    texturePause.wrapT = THREE.RepeatWrapping;
	
	texturePause.wrapS = THREE.RepeatWrapping;
    texturePause.wrapT = THREE.RepeatWrapping;
    
    texturePause.repeat.set( 1, 1 );
    textureGameOver.repeat.set( 1, 1 );

    	
  	box_pause = new THREE.Mesh( geometry, materialPause );
  	box_pause.position.set(0, 10, 0);
  	box_pause.add(new THREE.AxisHelper(100));
  	scene2.add(box_pause);

  	box_game_over = new THREE.Mesh( geometry, materialGameOver );
  	box_game_over.position.set(0, 10, 0);
  	scene2.add(box_game_over);
}