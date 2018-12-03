function hasCollision(obj, objArr, nrEl, radius1, radius2, el)
{
	var i;
	var mindist = Math.pow((radius1+radius2), 2);
	for(i = 0; i < nrEl ;++i)
	{
		
		var d_square = Math.pow(objArr[i].position.z - obj.position.z, 2) + Math.pow(objArr[i].position.x - obj.position.x, 2);
		if( d_square <= mindist && i != el )
		{
			treatCollision(objArr[i], obj);
			//console.log('hasCollision' + 'mindist: ' + mindist + '	d_square: ' + d_square + '	' + i + '-' + el);
		}
	}
}


function treatCollision(obj1, obj2)
{
	'use strict';
		
	if(obj1.userData.type == CHEERIO)
	{
		var axisX = obj1.position.x -  obj2.position.x;
		var axisZ = obj1.position.z - obj2.position.z;

		var dof = new THREE.Vector3(axisX, 0, axisZ);
		dof.normalize();
		obj1.userData.dof = dof;

		if(obj2.userData.type == CAR){
			obj1.userData.vel = Math.abs(obj2.userData.vel*1.5);
		}
		
		if(obj2.userData.type == CHEERIO){
			obj1.userData.vel = Math.abs(obj2.userData.vel*0.8);
		}
	}
	
	
	if(obj1.userData.type == ORANGE && obj2.position.x != 30 && obj2.position.z != 10)
	{
		obj2.userData.vel = 0;
		obj2.position.set(30, 17, 10);
		obj2.rotation.y = 0;
		carLives[nlives-1].visible = false;
		nlives -= 1;
		console.log('colision');
		if (nlives == 0){gameOver = true;
						console.log(gameOver)}
	}

	if (obj1.userData.type == BUTTER)
	{
		obj2.userData.vel = 0;
		obj2.translateX(-obj2.userData.dist);
	}
}