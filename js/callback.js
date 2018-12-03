
function onResize()
{
	'use strict';
	aspect = window.innerWidth/window.innerHeight;

	renderer.setSize(window.innerWidth,window.innerHeight);

	cameraOrtog.left = frustum * aspect / -8;
	cameraOrtog.right = frustum * aspect / 8;
	cameraOrtog.top = frustum / 8;
	cameraOrtog.bottom = frustum / -8;

	cameraOrtog.updateProjectionMatrix();

	cameraLives.left = frustum * aspect / -8;
	cameraLives.right = frustum * aspect / 8;
	cameraLives.top = frustum / 8;
	cameraLives.bottom = frustum / -8;

	cameraLives.updateProjectionMatrix();

	cameraPerspective.updateProjectionMatrix();
	cameraPerspective.aspect = aspect;

	cameraCar.updateProjectionMatrix();
	cameraCar.aspect = aspect;

}

function onKeyDown(e)
{
 	'use strict';

	switch(e.keyCode)
	{
		case 37://Tecla left
			leftPressed = true;
			break;
		case 38: //Tecla up
			car.userData.acc = 45;
			break;
		case 39: //Tecla right
			rightPressed = true;
			break;
		case 40: //Tecla down
			car.userData.acc = -45;
			break;
		case 65: // Tecla A
		case 97: //Tecla a
			changeFrame = true;
			break;
		case 71: // tecla G
		case 103: //tecla g
		 changeMaterial = true;
		break;
		case 49: //Tecla 1
			cameraAtual = "cameraOrtog";
			break;
		case 50: //Tecla 2
			cameraAtual = "cameraPerspective";
			break;
		case 51: //Tecla 3
			cameraAtual = "cameraCar";
			break;
		case 67: //Tecla C
		case 99: //Tecla c
			removeCandle = true;
			break;

		//tecla N
		case 78://tecla n
			removeDirectional = true;
			break;

		case 76:
			removeCandle = true;
			removeDirectional = true;
			materialsBasic = true;
			break;

		case 83: //tecla S
			isPause = !isPause;
			break;

		case 72: //tecla H
			removeLantern = true;
			break;

		case 82: //tecla R
			resetGame();
			break;
	}
}

function onKeyUp(e)
{
 	'use strict';

	switch(e.keyCode)
	{
		case 37:
			leftPressed = false;
			break;
		case 38:
			car.userData.acc = 0;	//up key unpressed
			break;
		case 39:
			rightPressed = false;
			break;
		case 40:
			car.userData.acc = 0;	//down key unpressed
			break;
	}
}


function changeWireFrame()
{
	'use strict';

	if(changeFrame){
		scene.traverse(function(node){
			if (node instanceof THREE.Mesh){node.material.wireframe = !node.material.wireframe;}
		});
	}
	changeFrame = false;
}


function changeMaterials()
{
	'use strict';

	if(changeMaterial)
	{
		scene.traverse(function(child)
		{

			if(child instanceof THREE.Mesh)
			{

				if(child.material instanceof THREE.MeshPhongMaterial)
				{

					child.material = child.userData.Lambert;

				}

				else if(child.material instanceof THREE.MeshLambertMaterial)
				{
					child.material = child.userData.Phong;
				}


			}
		});
	}

	changeMaterial = false;
}



function removeCandles()
{
		if(removeCandle)
		{
			for(var i = 0; i< candles.length; i++)
			{
				candles[i].visible = !candles[i].visible;
			}
			removeCandle = false;
		}

}

function changeDayNight()
{
	if(removeDirectional)
	{
		directionalLight.visible = !directionalLight.visible;
	}

	removeDirectional = false;
}


function changeToBasic()
{
	if(materialsBasic)
	{


		scene.traverse(function(child)
		{

			if(child instanceof THREE.Mesh)
			{
				if(child.material instanceof THREE.MeshPhongMaterial || child.material instanceof THREE.MeshLambertMaterial)

					child.material = child.userData.Basic;


				else if (child.material instanceof THREE.MeshBasicMaterial)

					child.material = child.userData.Phong;
			}
		});
	}

	materialsBasic = false;
}

function changeToPause()
{
	if(!gameOver)
	{
		if(isPause)
		{
			clock.stop();
			box_pause.material.transparent = false;

		}

		else
		{ 
			clock.start();
			box_pause.material.transparent = true;
			box_pause.material.opacity = 0;
		}
	}
}

function gameEnd()
{
	if(gameOver)
	{
		clock.stop();
		box_game_over.material.transparent = false;
	}
}

function resetGame()
{
	gameOver = false;

	clock.start();
	box_game_over.material.transparent = true;
	box_game_over.material.opacity = 0;

	resetCar();
	resetOranges();
	resetCheerios(numCheerios);
}

function removeLanterns()
{
	if(removeLantern)
	{
		for(var i = 0; i < numLanterns; i++)
		{
				if(lanterns[i].intensity == 0)
				{
					lanterns[i].intensity = 2;
				}
				else 
					lanterns[i].intensity = 0;
		}
		
		removeLantern = false;
	}
}