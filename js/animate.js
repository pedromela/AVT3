function animate()
{
	'use strict';

	var i;

	if(clock.running == true)
	{

			delta = clock.getDelta();
			mov(car);
			movUniform(oranges, numOranges, 4.5);

			for (i = 0; i < numCheerios; i++)
			{
				mov(cheerios[i]);
			}

			hasCollision(car, oranges, numOranges, carradius, orangeradius, IGNORE);
			hasCollision(car, cheerios, numCheerios, carradius, cheerioradius, IGNORE);

			for (i = 0; i < numCheerios; i++) 
			{
			hasCollision(cheerios[i], cheerios, numCheerios, cheerioradius, cheerioradius, i);
			}

			hasCollision(car,butters, numButter,carradius, butterradius, IGNORE);

			changeWireFrame();
			changeMaterials();
			removeCandles();
			changeDayNight();
			changeToBasic();
			removeLanterns();
			
		}
		gameEnd();
		changeToPause();

		
		requestAnimationFrame(animate);
		
		render(cameraAtual);
}
