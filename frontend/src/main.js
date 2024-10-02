import * as BABYLON from 'babylonjs';

const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas);

const createScene = () => {
    const scene = new BABYLON.Scene(engine);

    return scene;
};

const scene = createScene();

engine.runRenderLoop(() => {
    scene.render();
});