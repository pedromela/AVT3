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
		if(Math.abs(obj.position.x) >= track.userData.xMax || Math.abs(obj.position.z) >= track.userData.zMax)
		{
			obj.userData.vel = 0;
			obj.position.set(30, 17, 10);
			obj.rotation.y = 0;
			carLives[nlives-1].visible = false;
			nlives -= 1;
			console.log('colision');
			if (nlives == 0){gameOver = true;
							console.log(gameOver)}
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