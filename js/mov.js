function mov(obj)
{
 	'use strict';
		
	//var delta = clock.getDelta();
	var drag = obj.userData.drag;

	if(obj.userData.type == CAR){
		if(leftPressed)
		{
			obj.rotation.y += 2*delta*obj.userData.vel/50;
		}
		
		if(rightPressed)
		{
            obj.rotation.y += -2 * delta * obj.userData.vel/50;
		}
	}

	obj.userData.vel = Math.max(Math.min(obj.userData.vel + obj.userData.acc*delta, 50), -50);  //keeps vel within allowed range
	obj.userData.dist = obj.userData.vel*delta;

	if(obj.userData.type == CAR){

		//check board limits
		if(Math.abs(obj.position.x) >= track.userData.xMax || Math.abs(obj.position.z) >= track.userData.zMax)
		{
			car.userData.vel = 0;
			car.position.set(0, 16.1, 55);
			car.rotation.y = 0;
			carLives[nlives-1].visible = false;
			nlives -= 1;
			console.log('colision');
			updateScore(-2);
			if (nlives == 0){gameOver = true;
							console.log(gameOver)}
		}

		//checkpoints and score system
		if(obj.position.x > 72 && obj.position.x < 120 && Math.abs(obj.position.z) < 3 && checkpoint == 0){
			checkpoint = 1;
			console.log("check1");
		}
		else if(obj.position.z < -44 && obj.position.z > -73 && Math.abs(obj.position.x) < 3 && checkpoint == 1){
			checkpoint = 2;
			console.log("check2");
		}
		else if(obj.position.x < -72 && obj.position.x > -120 && Math.abs(obj.position.z) < 3 && checkpoint == 2){
			checkpoint = 3;
			console.log("check3");
		}
		else if(obj.position.z > 44 && obj.position.z < 73 && Math.abs(obj.position.x) < 3 && checkpoint == 3){
			checkpoint = 0;
			updateScore(10);
			console.log("lap");
		}
	}

	if(obj.userData.vel >= 0){
		obj.userData.vel = Math.max(obj.userData.vel - drag*delta, 0);	//constant road drag applied to the car moving forward
	}
	if(obj.userData.vel <= 0){
		obj.userData.vel = Math.min(obj.userData.vel + drag*delta, 0);	//constant road drag applied to the car moving backwards
	}

	//console.log(obj.userData.vel);
	//obj.translateX(obj.userData.dist);
	obj.translateOnAxis(obj.userData.dof, obj.userData.dist);
}


function movUniform(obj, nrObj, radius)
{
	'use strict';
	
	var time = clock.elapsedTime;
	var moment = Math.floor(time/12);
	//console.log('moment: ' + moment + 'old moment: ' + oldmoment);
	var isnewmoment = false;

	if(oldmoment != moment){
		isnewmoment = true;
		oldmoment = moment;
	}	

	var i;
	for( i = 0; i < nrObj; ++i)
	{
		if(isnewmoment){
			obj[i].userData.vel += 5;
		}
		
        var newdist = obj[i].userData.vel * delta;
        var newdistX = newdist * Math.cos(obj[i].userData.rot);
        var newdistZ = newdist * Math.sin(obj[i].userData.rot);
        obj[i].userData.distX += newdistX;
        var posZ = obj[i].position.z + newdistZ;
        obj[i].position.set(obj[i].userData.distX, obj[i].position.y, posZ);
        obj[i].rotation.y = -obj[i].userData.rot;
        obj[i].rotation.z -= Math.abs(newdist / radius);
		
        if (obj[i].position.x >= track.userData.xMax || obj[i].position.z >= track.userData.zMax || obj[i].position.x <= track.userData.xMin || obj[i].position.z <= track.userData.zMin)
        {
            newPosition(obj[i]);
            newRotation(obj[i], getRandomInt(0, 180));
		}
	}

	isnewmoment = false;
	
}