/*jshint esversion: 6 */
// @ts-check

/**
 * Graphics Town Framework - "Main" File
 *
 * This is the main file - it creates the world, populates it with
 * objects and behaviors, and starts things running
 *
 * The initial distributed version has a pretty empty world.
 * There are a few simple objects thrown in as examples.
 *
 * It is the students job to extend this by defining new object types
 * (in other files), then loading those files as modules, and using this
 * file to instantiate those objects in the world.
 */

import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import * as Helpers from "../libs/CS559-Libs/helpers.js";
import { WorldUI } from "../libs/CS559-Framework/WorldUI.js";

// import {main} from "../examples/main.js";
import { SimpleHouse } from "../examples/house.js";
import { CircularTrack, TrackCube, TrackCar } from "../examples/track.js";
import { Helicopter, Helipad } from "../examples/helicopter.js";
import { ShinySculpture } from "../examples/shinySculpture.js";
import { MorphTest } from "../examples/morph.js";

import {GrTruck, GrBus1, GrBus2, GrCar1, GrCar2} from "./cars.js";
import {GrRoad, GrShiny} from "./traffic.js";
import {GrBuilding1, GrTree} from "./buildings.js";
/**m
 * The Graphics Town Main -
 * This builds up the world and makes it go...
 */
function grtown() {
  // make the world
  let world = new GrWorld({
    width: 1000,
    height: 800,
    groundplanesize: 50 // make the ground plane big enough for a world of stuff
  });


  world.scene.background = new T.CubeTextureLoader()
	.setPath( './Pictures/' )
	.load( [
		'sh_rt.png',
		'sh_lf.png',
		'sh_up.png',
		'sh_dn.png',
		'sh_bk.png',
		'sh_ft.png'
    ] );

    let car1 = new GrTruck();
    car1.objects[0].position.x = 10;
    car1.objects[0].position.z = 2;
    world.add(car1);

    let car2 = new GrCar1(); 
    car2.objects[0].position.x = 10;
    car2.objects[0].position.z = 6;
    world.add(car2);

    let car3 = new GrCar2();
    car3.objects[0].position.x = 10;
    car3.objects[0].position.z = 10;
    world.add(car3);

    let car4 = new GrBus1();
    car4.objects[0].position.x = 10;
    car4.objects[0].position.z = -2;
    world.add(car4);

    let car5 = new GrBus2();
    car5.objects[0].position.x = 10;
    car5.objects[0].position.z = -6;
    world.add(car5);

    // world.add(new GrHeli());
    // world.add(new GrFlag(world,-17,-17.5));
    // world.add(new GrFlag(world,17,17.5));
    // world.add(new GrFlag(world,17,-17.5));
    // world.add(new GrFlag(world,-17,17.5));
    let flag = (new GrShiny(world,2));
    flag.setScale(2,2,2);
    flag.objects[0].translateY(2)
    world.add(flag)

    world.add(new GrRoad());

    let building_indx;
    for(building_indx = 0; building_indx < 1; building_indx ++){
        world.add(new GrBuilding1({z:building_indx*7,x:-26, size:2, rotate:1}));
        let group2 = new GrBuilding1({z:building_indx*7,x:26, size:2, rotate:1});
        group2.objects[0].rotateY(Math.PI)
        world.add(group2);
    }

    let tree1 = new GrTree(25,0,10, 20);
    tree1.setScale(1.5,2,1.5)
    world.add(tree1);

    let tree2 = new GrTree(28,0,10, 10);
    tree2.setScale(1.5,1.3,1.5)
    world.add(tree2);

    let tree3 = new GrTree(33,0,13, 5);
    tree3.setScale(1.5,2,1.5)
    world.add(tree3);

    let tree4 = new GrTree(33,0,7, 8);
    tree4.setScale(1.5,2,1.5)
    world.add(tree4);

    let tree5 = new GrTree(34,0,0, 20);
    tree5.setScale(1.5,2.5,1.5)
    world.add(tree5);

    let tree6 = new GrTree(28,0, -7, 15);
    tree6.setScale(1.5,1.7,1.5)
    world.add(tree6);


  // put stuff into the world
  // this calls the example code (that puts a lot of objects into the world)
  // you can look at it for reference, but do not use it in your assignment
  // main(world);

  // build and run the UI

  // only after all the objects exist can we build the UI
  // @ts-ignore       // we're sticking a new thing into the world
  world.ui = new WorldUI(world);
  // now make it go!
  world.go();
}
Helpers.onWindowOnload(grtown);