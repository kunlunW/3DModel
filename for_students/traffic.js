/*jshint esversion: 6 */
// @ts-check



// get things we need
import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";

let world_size = 90;

export class GrRoad extends GrObject {
    constructor() {
        let avenue = new T.Group();
        
        let geo1 = new T.BoxGeometry( world_size*0.8,0.02,4 );
        let geo2 = new T.BoxGeometry( 3,0.05,world_size*0.8 );
        let geomesh = new T.MeshStandardMaterial({color:"#A9A9A9", metalness:0.9, roughness:0.8});
        let mesh1 = new T.Mesh(geo1, geomesh);
        let mesh2 = new T.Mesh(geo1, geomesh);
        let mesh3 = new T.Mesh(geo2, geomesh);
        let mesh4 = new T.Mesh(geo2, geomesh);
        avenue.add(shift(mesh1 ,0,world_size/5));
        avenue.add(shift(mesh2 ,0,-world_size/5));
        avenue.add(shift(mesh3 ,world_size/5,0));
        avenue.add(shift(mesh4 ,-world_size/5,0));
        super("Roads",avenue);
    }
}

export class GrShiny extends GrObject {
    /**
     * @param {GrWorld} world
     */
    constructor(world,radius =1.5 ) {

        let flag = new T.Group();
        super("ShinySculpture", flag);
        this.world = world;
        this.cubecam = new T.CubeCamera(radius*1.5, 100, 128);
        this.sculptureGeom = new T.SphereBufferGeometry(radius, 100, 100);
        this.sculptureMaterial = new T.MeshStandardMaterial({
            color: "white",
            roughness: 0.2,
            metalness: .7,
            // @ts-ignore   // envMap has the wrong type
            envMap: this.cubecam.renderTarget.texture,
          });
          this.sculpture = new T.Mesh(this.sculptureGeom, this.sculptureMaterial);
          flag.add(this.cubecam);
        flag.add(this.sculpture);
        this.sculpture.rotateY(Math.PI/2);
        this.sculpture.translateY(3);


        // let camera2 = new T.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        // flag.add(camera2);
        
        // camera2.position.set(0,1,0); 
        // var bufferTexture = new T.WebGLRenderTarget( 256, 256, { minFilter: T.LinearFilter, magFilter: T.NearestFilter});
        // let screen = new T.Mesh(new T.SphereGeometry(1.5,50,50), new T.MeshStandardMaterial({map:bufferTexture.texture,}));
        // flag.add(screen);
        // screen.rotateY(Math.PI/2);
        // screen.translateY(2);
        let base_geom = new T.BoxGeometry( 0.5, 2, 0.5 );
		let base_mat = new T.MeshStandardMaterial({color:"white", metalness:0.5, roughness:0.2});
        let pole = new T.Mesh(base_geom, base_mat);
        flag.add(pole);
        // flag.position.set(cam_x, 1, cam_z);
        // super(`Flag-${flagObCtr++}`,flag);
        // this.screen = screen;
        // this.world = world;
        // this.camera2 = camera2;
        // this.bufferTexture = bufferTexture;
        // this.flag = flag;
        // this.cam_x = cam_x;
        // this.cam_z = cam_z;
          
    }
    // advance(delta,timeOfDay) {
    //     this.camera2.lookAt(-this.cam_x,0,-this.cam_z);
    //     this.world.renderer.render(this.world.scene, this.camera2, this.bufferTexture);
    //     this.screen.lookAt(this.world.camera.position);
    // }

    tick(delta, timeOfDay) {
        this.cubecam.update(this.world.renderer, this.world.scene);
      }
}



function shift(grobj,x,z,s=1) {
    grobj.translateX(x);
    grobj.translateZ(z);
    grobj.scale.set(s,s,s);
    return grobj;
}