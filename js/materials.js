function fillMaterials()
{
	materials[Phong][CAR] = {};
	materials[Lambert][CAR] = {};
	materials[Basic][CAR] = {};
	
	
	materials[Phong][CAR]["Wheels"] = new THREE.MeshPhongMaterial({emissive:0.02, shininess: 5, wireframe:false, side: THREE.DoubleSide});	
	materials[Phong][CAR]["Wheels"].color.setRGB(0.01, 0.01, 0.01);
	materials[Phong][CAR]["Wheels"].specular.setRGB(0.4, 0.4, 0.4);
		
	materials[Lambert][CAR]["Wheels"] = new THREE.MeshLambertMaterial({emissive:0.02, wireframe:false, side: THREE.DoubleSide});
	materials[Lambert][CAR]["Wheels"].color.setRGB(0.01, 0.01, 0.01);
	
	materials[Basic][CAR]["Wheels"] =  new THREE.MeshBasicMaterial({color: 0x000000 , wireframe: false, side: THREE.DoubleSide})
	
	materials[Phong][CAR]["Base"] = new THREE.MeshPhongMaterial({emissive:0.02, shininess: 100 ,wireframe:false, side: THREE.DoubleSide});
	materials[Phong][CAR]["Base"].color.setRGB(1, 0, 0);
	materials[Phong][CAR]["Base"].specular.setRGB(0.08, 0.08, 0.08);
	
	materials[Lambert][CAR]["Base"] = new THREE.MeshLambertMaterial({wireframe:false, side: THREE.DoubleSide});
	materials[Lambert][CAR]["Base"].color.setRGB(1, 0, 0);
	
	materials[Basic][CAR]["Base"] = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: false, side: THREE.DoubleSide});
	


	materials[Phong][CAR]["Cockpit"] = new THREE.MeshPhongMaterial({emissive:0.02, shininess: 100 ,wireframe:false, side: THREE.DoubleSide});
	materials[Phong][CAR]["Cockpit"].color.setRGB(0, 0, 1);
	materials[Phong][CAR]["Cockpit"].specular.setRGB(0.08, 0.08, 0.08);
	
	materials[Lambert][CAR]["Cockpit"] = new THREE.MeshLambertMaterial({wireframe:false, side: THREE.DoubleSide});
	materials[Lambert][CAR]["Cockpit"].color.setRGB(0, 0, 1);
	
	materials[Basic][CAR]["Cockpit"] = new THREE.MeshBasicMaterial({color: 0x0000FF, wireframe: false, side: THREE.DoubleSide});




	materials[Phong][CAR]["Spoiler"] = new THREE.MeshPhongMaterial({emissive:0.02, shininess: 100 ,wireframe:false, side: THREE.DoubleSide});
	materials[Phong][CAR]["Spoiler"].color.setRGB(0, 0, 0);
	materials[Phong][CAR]["Spoiler"].specular.setRGB(0.08, 0.08, 0.08);
	
	materials[Lambert][CAR]["Spoiler"] = new THREE.MeshLambertMaterial({wireframe:false, side: THREE.DoubleSide});
	materials[Lambert][CAR]["Spoiler"].color.setRGB(0, 0, 0);
	
	materials[Basic][CAR]["Spoiler"] = new THREE.MeshBasicMaterial({color: 0x000000 , wireframe: false, side: THREE.DoubleSide});
	

	materials[Phong][ORANGE] = {};
	materials[Lambert][ORANGE] = {};
	materials[Basic][ORANGE] = {};
	
	materials[Phong][ORANGE]["Base"] = new THREE.MeshPhongMaterial({shininess:27, wireframe: false});
	materials[Phong][ORANGE]["Base"].color.setRGB(0.4,0.22,0.027);
	materials[Phong][ORANGE]["Base"].specular.setRGB(0.1, 0.1, 0.1);
	
	materials[Lambert][ORANGE]["Base"] = new THREE.MeshLambertMaterial({wireframe:false});
	materials[Lambert][ORANGE]["Base"].color.setRGB(0.4,0.22,0.027);
	
	materials[Basic][ORANGE]["Base"] = new THREE.MeshBasicMaterial({color: 0xFFD000, wireframe: false});
	
	materials[Phong][ORANGE]["Leaf"] = new THREE.MeshPhongMaterial({color: 0x00ff00, shininess:5, wireframe: false});
	materials[Phong][ORANGE]["Leaf"].specular.setRGB(0.08, 0.08, 0.08);
	
	materials[Lambert][ORANGE]["Leaf"] = new THREE.MeshLambertMaterial({color:0x00ff00, wireframe:false});
	
	materials[Basic][ORANGE]["Leaf"] = new THREE.MeshBasicMaterial( { color: 0x00ff00,wireframe: false} );
	

	
	materials[Phong][TRACK] = {};
	materials[Lambert][TRACK] = {};
	materials[Basic][TRACK] = {};
	
	materials[Phong][TRACK]["Base"] = new THREE.MeshPhongMaterial({color: 0x004352, shininess: 10 ,wireframe:false});
	materials[Phong][TRACK]["Base"].specular.setRGB(0.01, 0.01, 0.01);
	
	materials[Lambert][TRACK]["Base"] = new THREE.MeshLambertMaterial({color:0x004352, wireframe:false});
	
	materials[Basic][TRACK]["Base"] = new THREE.MeshBasicMaterial({color:0x008B8B, wireframe: false });
	
	
	
	materials[Phong][BUTTER] = {};
	materials[Lambert][BUTTER] = {};
	materials[Basic][BUTTER] = {};
	
	materials[Phong][BUTTER]["Base"] = new THREE.MeshPhongMaterial({shininess: 24 ,wireframe:false});
	materials[Phong][BUTTER]["Base"].color.setRGB(0.9, 0.72, 0.41);
	materials[Phong][BUTTER]["Base"].specular.setRGB(0.4, 0.4, 0.4);
	
	materials[Lambert][BUTTER]["Base"] = new THREE.MeshLambertMaterial({wireframe:false});
	materials[Lambert][BUTTER]["Base"].color.setRGB(0.9, 0.72, 0.41);
	
	materials[Basic][BUTTER]["Base"] =  new THREE.MeshBasicMaterial( { color: 0xffff00 } );
	
	
	materials[Phong][CHEERIO] = {};
	materials[Lambert][CHEERIO] = {};
	materials[Basic][CHEERIO] = {};
	
	materials[Phong][CHEERIO]["Base"] = new THREE.MeshPhongMaterial({wireframe:false});
	materials[Phong][CHEERIO]["Base"].color.setRGB(0.9, 0.27, 0.1);
	materials[Phong][CHEERIO]["Base"].specular.setRGB(0.01, 0.01, 0.01);
	
	materials[Lambert][CHEERIO]["Base"] = new THREE.MeshLambertMaterial({wireframe:false});
	materials[Lambert][CHEERIO]["Base"].color.setRGB(0.9, 0.27, 0);
	
	materials[Basic][CHEERIO]["Base"] =  new THREE.MeshBasicMaterial( { color: 0xE18700 });
	

}
