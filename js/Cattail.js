// JavaScript source code
/*function createCattail() {

    var angle = 2 * Math.PI / 10;
    for (var j = 0; j < 10; j++) {

        var cattail = new THREE.Object3D();

        var mtlLoader = new THREE.MTLLoader();
        mtlLoader.load('./cattail/Cattail.mtl', function (materials) {
            materials.preload();
            materials.transparent = true;

            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);

            objLoader.load('./cattail/Cattail.obj', function (mesh) {
                mesh.rotation.y = Math.PI / 2;
                //mesh.scale.set(3,3,3);
                cattail.add(mesh);
            });

        });

        var stepangle = angle * j;
        var x = (Math.cos(stepangle) * 50 * Math.random() * 1.5);
        var z = (Math.sin(stepangle) * 50 * Math.random() * 0.9);

        cattail.position.set(x, 20, z);

        scene.add(cattail);
    }
}*/

function createCattails(n) {
    'use strict';

    var len = trackCoord.length;
    var randomI = 0;
    var iter = 0;

    var angle = 2 * Math.PI / n;
    for (var j = 0; j < n; j++) {
        randomI = Math.floor(Math.random() * len);

        if (!memory.includes(randomI)) {

            var stepangle = angle * j;
            var x = (Math.cos(stepangle) * 45 * Math.random() * 1.5);
            var z = (Math.sin(stepangle) * 45 * Math.random() * 0.9);

            for (var k = 0; k < 5; k++) {
                var cattail = createcattail(x + (2.5*Math.random() - 5), z + (2.5*Math.random() - 5));
                memory.push(randomI);
                cattails.push(cattail);
            }
            iter++;
        };
    }
}

function createcattail(x, z) {
    'use strict';

    var cattail = new THREE.Object3D();

    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.load('./cattail/Cattail.mtl', function (materials) {
        materials.preload();
        materials.transparent = true;

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load('./cattail/Cattail.obj', function (mesh) {
            mesh.rotation.y = Math.PI / 2;
            //mesh.scale.set(3,3,3);
            cattail.add(mesh);
        });

    });

    cattail.position.set(x, 15, z);
    cattail.scale.set(0.1, 0.1, 0.1);
    cattail.rotateY(Math.random() * Math.PI * 2);
    scene.add(cattail);
    return cattail;
}