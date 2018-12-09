function initParticleSystem() {
	var geometry = new THREE.BufferGeometry();
	var vertices = [];
	var textureLoader = new THREE.TextureLoader();
	var sprite1 = textureLoader.load( 'textures/sprites/snowflake1.png' );
	var sprite2 = textureLoader.load( 'textures/sprites/snowflake2.png' );
	var sprite3 = textureLoader.load( 'textures/sprites/snowflake3.png' );
	var sprite4 = textureLoader.load( 'textures/sprites/snowflake4.png' );
	var sprite5 = textureLoader.load( 'textures/sprites/snowflake5.png' );
	for ( var i = 0; i < 10000; i ++ ) {
		var x = Math.random() * 2000 - 1000;
		var y = Math.random() * 2000 - 1000;
		var z = Math.random() * 2000 - 1000;
		vertices.push( x, y, z );
	}
	geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
	parameters = [
		[[ 1.0, 0.2, 0.5 ], sprite2, 1 ],
		[[ 0.95, 0.1, 0.5 ], sprite3, 1 ],
		[[ 0.90, 0.05, 0.5 ], sprite1, 1 ],
		[[ 0.85, 0, 0.5 ], sprite5, 1 ],
		[[ 0.80, 0, 0.5 ], sprite4, 1 ]
	];
	for ( var i = 0; i < parameters.length; i ++ ) {
		var color = parameters[ i ][ 0 ];
		var sprite = parameters[ i ][ 1 ];
		var size = parameters[ i ][ 2 ];
		
		particles_materials[ i ] = new THREE.PointsMaterial( { size: size, map: sprite, blending: THREE.AdditiveBlending, depthTest: true, transparent: false} );
		particles_materials[ i ].color.setHSL( color[ 0 ], color[ 1 ], color[ 2 ] );
		var particles = new THREE.Points( geometry, particles_materials[ i ] );
		particles.rotation.x = Math.random() * 6;
		particles.rotation.y = Math.random() * 6;
		particles.rotation.z = Math.random() * 6;
		scene.add( particles );
	}
}

function UpdateParticleSystem() {

	var time = Date.now() * 0.0000005;

	for ( var i = 0; i < scene.children.length; i ++ ) {
	var object = scene.children[ i ];
		if ( object instanceof THREE.Points ) {
			object.rotation.y = time * ( i < 4 ? i + 1 : - ( i + 1 ) );
		}
	}

}