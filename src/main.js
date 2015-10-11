var game = {

};

var render = function () {
    requestAnimationFrame( render );


    game.renderer.render(game.scene, game.camera);
};

function degInRad(deg) {
    return (Math.PI * deg) / 180;
}

function init() {
    game.scene = new THREE.Scene();
    game.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    game.camera.position.set(0, 0, 5);
    console.log(degInRad(90));
    //game.camera.rotateOnAxis(new THREE.Vector3(1, 0, 0), degInRad(-90));

    game.renderer = new THREE.WebGLRenderer();
    game.renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( game.renderer.domElement );

    var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
    directionalLight.position.set( 0, 0, 1 );
    game.scene.add( directionalLight );

    var loader = new THREE.JSONLoader();
    loader.load( "data/monkey.json", function ( geometry ) {
        var material = new THREE.MeshLambertMaterial({ color: 0xD43001 });
        var model = new THREE.Mesh(geometry, material);
        game.scene.add(model);
    } );


    game.camera.position.z = 5;

    render();

}
