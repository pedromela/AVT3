// JavaScript source code
function createBillboard() {

    //var geometry = new THREE.BufferGeometry();
    /*var vertices = [];
    var billboard = new THREE.TextureLoader().load('./tree.tga');

    for (var i = 0; i < 20; i++) {
        var x = i*5 - 200;
        var y = 17;
        var z = 200;
        vertices.push(x, y, z);

        var y = i * 5 - 200;
        var y = 17;
        var x = 200;
        vertices.push(x, y, z);

        var x = i * 5 - 200;
        var y = 17;
        var z = -200;
        vertices.push(x, y, z);

        var y = i * 5 - 200;
        var y = 17;
        var x = -200;
        vertices.push(x, y, z);
    }
    
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    material = new THREE.PointsMaterial({ size: 35, sizeAttenuation: false, map: billboard, alphaTest: 0.5, transparent: true });
    material.color.setHSL(1.0, 0.3, 0.7);

    var particles = new THREE.Points(geometry, material);
    scene.add(particles);*/
    /*var spriteMap = new THREE.TextureLoader().load("./tree.png");
    var spriteMaterial = new THREE.SpriteMaterial({ map: spriteMap, color: 0xffffff });
    var billboard = new THREE.Sprite(spriteMaterial);

    billboard.scale.set(32, 32, 1.0);

    billboard.position.set(200, 28, -200);
    scene.add(billboard);*/
    var spriteMap = new THREE.TextureLoader().load("./tree.png");
    var spriteMaterial = new THREE.SpriteMaterial({ map: spriteMap, color: 0xffffff, alphaTest:0.1 });

    var d = 190;
    var d2 = d / 10;

    for (var i = 0; i < 20; i++) {
        var billboard = new THREE.Sprite(spriteMaterial);
        billboard.scale.set(32, 32, 1.0);
        billboard.position.set(i * d2 - d, 27, d);
        scene.add(billboard);

        
        var billboard = new THREE.Sprite(spriteMaterial);
        billboard.scale.set(32, 32, 1.0);
        billboard.position.set(i * d2 - d, 27, -d);
        scene.add(billboard);


        
        var billboard = new THREE.Sprite(spriteMaterial);
        billboard.scale.set(32, 32, 1.0);
        scene.add(billboard);
        billboard.position.set(-d, 27, i * d2 - d);


        var billboard = new THREE.Sprite(spriteMaterial);
        billboard.scale.set(32, 32, 1.0);
        billboard.position.set(d, 27, i * d2 - d);
        scene.add(billboard);
    }
    
    /*var spriteMap = new THREE.TextureLoader().load("./cattail.png");
    var spriteMaterial = new THREE.SpriteMaterial({ map: spriteMap, color: 0xffffff, alphaTest: 0.1 });

    var angle = 2 * Math.PI / 10;
    for (var j = 0; j < 10; j++) {
        var billboard = new THREE.Sprite(spriteMaterial);
        billboard.scale.set(16, 16, 1.0);
        scene.add(billboard);

        var stepangle = angle * j;
        var x = (Math.cos(stepangle) * 50 * Math.random() * 1.5);
        var z = (Math.sin(stepangle) * 50 * Math.random() * 0.9);

        billboard.position.set(x, 20, z);
    }*/
}