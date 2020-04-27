/*jshint esversion: 6 */
// @ts-check

// these four lines fake out TypeScript into thinking that THREE
// has the same type as the T.js module, so things work for type checking
// type inferencing figures out that THREE has the same type as T
// and then I have to use T (not THREE) to avoid the "UMD Module" warning


// get things we need
import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

// let v = 0.3, v2 = 0.1;
let world_size = 100;
let road_size = 3.5;
export class GrTruck extends GrObject {
    constructor() {
		let truck = new T.Group();
        let frontg = new T.Group();
		let fgeom = new T.BoxGeometry( 0.6, 0.9, 0.8 );
		let fmat = new T.MeshStandardMaterial({color:"gold", metalness:0.5, roughness:0.9});
        let front = new T.Mesh(fgeom, fmat);
        let fwgeom = new T.BoxGeometry( 0.1, 0.4, 0.6 );
		let win_mat = new T.MeshStandardMaterial({color:"white", metalness:0.3, roughness:0.2});
        let fwindow = new T.Mesh(fwgeom, win_mat);
        let sgeom = new T.BoxGeometry( 0.3, 0.4, 0.1 );
        let side1win = new T.Mesh(sgeom, win_mat);
        let side2_window = new T.Mesh(sgeom, win_mat);
        let frontboard_geom = new T.BoxGeometry( 0.4, 0.4, 0.6 );
		let frontboard_mat = new T.MeshStandardMaterial({color:"white",metalness:0.5, roughness:0.2});
        let frontboard = new T.Mesh(frontboard_geom, frontboard_mat);
        let ear_geom = new T.BoxGeometry( 0.1, 0.3, 0.2 );
		let ear_mat = new T.MeshStandardMaterial({color:"white", metalness:0.8, roughness:0.2});
        let ear1 = new T.Mesh(ear_geom, ear_mat);
        let ear2 = new T.Mesh(ear_geom, ear_mat);
        frontboard.translateY(-0.25);
        frontboard.translateX(-0.26);
        side1win.translateZ(0.36);
        side2_window.translateZ(-0.36);
        ear1.translateZ(0.4);
        ear2.translateZ(-0.4);
        ear1.translateX(0.24);
        ear2.translateX(0.24);
        ear1.translateY(0.1);
        ear2.translateY(0.1);
        side1win.translateY(0.1);
        side2_window.translateY(0.1);
        fwindow.translateX(0.26);
        fwindow.translateY(0.1);
        frontg.add(front,frontboard,fwindow,side1win,side2_window,ear1,ear2);
        frontg.translateY(0.4);
        frontg.translateX(0.5);
        truck.add(frontg);

        let cargo_geom = new T.BoxGeometry( 2.3, 1.1, 1 );
        let cargo_mat = new T.MeshStandardMaterial({color:"green", metalness:0.7, roughness:0.4});
        let cargo = new T.Mesh(cargo_geom, cargo_mat);
        cargo.translateY(0.5);
        cargo.translateX(-1.1);
        truck.add(cargo);

        let wheel_geom = new T.CylinderGeometry( 0.2, 0.2, 1.2, 32 );
        let wheel_mat = new T.MeshStandardMaterial({color:"black", metalness:0.9, roughness:0.8});
        let wheel1 = new T.Mesh(wheel_geom, wheel_mat);
        let wheel2 = new T.Mesh(wheel_geom, wheel_mat);
        let wheel3 = new T.Mesh(wheel_geom, wheel_mat);
        let wheel4 = new T.Mesh(wheel_geom, wheel_mat);
        wheel1.rotateX(Math.PI/2);
        wheel2.rotateX(Math.PI/2);
        wheel3.rotateX(Math.PI/2);
        wheel4.rotateX(Math.PI/2);
        wheel1.translateX(-1.6);
        wheel2.translateX(-1.1);
        wheel3.translateX(-0.3);
        wheel4.translateX(0.2);
        truck.add(wheel1,wheel2,wheel3,wheel4);
        truck.translateY(0.2);
        truck.scale.set(1.5,1.5,1.5);
        super(`Truck`,truck);
        this.truck = truck;
        // truck.position.x = 10;
        // truck.position.z = 20
        truck.position.x = world_size/5 - road_size/4;
        truck.position.z = -world_size/5 + road_size/4;
        this.state = 0;
        // this.x = 2;
        // this.z = 10;
        this.x = world_size/5 - road_size/4;
        this.z = -world_size/5 + road_size/4;
    }

    advance(delta,timeOfDay) {
        let v = delta/70;
        switch(this.state) {
            case 0:  
                this.truck.translateX(v);
                this.z -= v;
                if(this.z <= -world_size/5 + road_size/4){
                    this.state = 1;
                    this.truck.rotateY(Math.PI/2);
                }
                break;
            case 1:
                this.truck.translateX(v);
                this.x += v;
                if(this.x >= world_size/5 - road_size/4){
                    this.state = 2;
                    this.truck.rotateY(Math.PI/2);
                }
                break;
            case 2:
                this.truck.translateX(v);
                this.z += v;
                if(this.z >= world_size/5 - road_size/4){
                    this.state = 3;
                    this.truck.rotateY(Math.PI/2);
                }
                break; 
            case 3:
                this.truck.translateX(v);
                this.x -= v;
                if(this.x <= -world_size/5 + road_size/3){
                    this.state = 0;
                    this.truck.rotateY(Math.PI/2);
                }
                break;   

        }
        
        
    }

}

export class GrBus1 extends GrObject {
    constructor() {
		let bus = new T.Group();
        
        let front_group = new T.Group();
		let front_geom = new T.BoxGeometry( 3.5, 1, 0.8 );
		let front_mat = new T.MeshStandardMaterial({color:"white", metalness:0.5, roughness:0.2});
        let front = new T.Mesh(front_geom, front_mat);
        let frontwin_geom = new T.BoxGeometry( 0.1, 0.5, 0.6 );
		let win_mat = new T.MeshStandardMaterial({color:"black", metalness:0.5, roughness:0.2});
        let front_window = new T.Mesh(frontwin_geom, win_mat);
        let sidewin_geom = new T.BoxGeometry( 0.5, 0.4, 0.1 );
        let side1_window = new T.Mesh(sidewin_geom, win_mat);
        let side2_window = new T.Mesh(sidewin_geom, win_mat);
        let side3_window = new T.Mesh(sidewin_geom, win_mat);
        let side4_window = new T.Mesh(sidewin_geom, win_mat);
        let side5_window = new T.Mesh(sidewin_geom, win_mat);
        let side6_window = new T.Mesh(sidewin_geom, win_mat);
        let side7_window = new T.Mesh(sidewin_geom, win_mat);
        let side8_window = new T.Mesh(sidewin_geom, win_mat);
        let ear_geom = new T.BoxGeometry( 0.1, 0.3, 0.2 );
		let ear_mat = new T.MeshStandardMaterial({color:"white", metalness:0.3, roughness:0.2});
        let ear1 = new T.Mesh(ear_geom, ear_mat);
        let ear2 = new T.Mesh(ear_geom, ear_mat);
        let sidewindows = new T.Group();
        side1_window.translateZ(0.36);
        side2_window.translateZ(-0.36);
        side3_window.translateZ(0.36);
        side4_window.translateZ(-0.36);
        side5_window.translateZ(0.36);
        side6_window.translateZ(-0.36);
        side7_window.translateZ(0.36);
        side8_window.translateZ(-0.36);
        side1_window.translateX(-0.2);
        side2_window.translateX(-0.2);
        side3_window.translateX(0.5);
        side4_window.translateX(0.5);
        side5_window.translateX(1.1);
        side6_window.translateX(1.1);
        side7_window.translateX(-0.8);
        side8_window.translateX(-0.8);
        ear1.translateZ(0.4);
        ear2.translateZ(-0.4);
        ear1.translateX(1.6);
        ear2.translateX(1.6);
        ear1.translateY(0.1);
        ear2.translateY(0.1);
        front_window.translateX(1.71);
        front_window.translateY(0.1);
        sidewindows.add(side1_window,side2_window,side3_window,side4_window,side5_window,side6_window,side7_window,side8_window);
        front_group.add(front,front_window,ear1,ear2,sidewindows);
        sidewindows.translateY(0.1);
        front_group.translateY(0.4);
        bus.add(front_group);

        let wheel_geom = new T.CylinderGeometry( 0.2, 0.2, 1, 32 );
        let wheel_mat = new T.MeshStandardMaterial({color:"black", metalness:0.3, roughness:0.8});
        let wheel1 = new T.Mesh(wheel_geom, wheel_mat);
        let wheel2 = new T.Mesh(wheel_geom, wheel_mat);
        let wheel3 = new T.Mesh(wheel_geom, wheel_mat);
        let wheel4 = new T.Mesh(wheel_geom, wheel_mat);
        wheel1.rotateX(Math.PI/2);
        wheel2.rotateX(Math.PI/2);
        wheel3.rotateX(Math.PI/2);
        wheel4.rotateX(Math.PI/2);
        wheel1.translateX(1.2);
        wheel2.translateX(0.5);
        wheel3.translateX(-0.5);
        wheel4.translateX(-1.2);
        bus.add(wheel1,wheel2,wheel3,wheel4);

        bus.translateY(0.2);

        // bus.translateZ(-1);
        // bus.translateX(-2);
        super(`Blue Bus`,bus);
        this.truck = bus;
        bus.scale.set(1.5,1.5,1.5);
        bus.position.x = world_size/10 + road_size/4 ;
        bus.position.z = world_size/5 + road_size/4;
        this.state = 3;
        this.x = world_size/5 + road_size/4;
        this.z = world_size/5 + road_size/4;
    }

    advance(delta,timeOfDay) {
        let v2 = delta/80;
        switch(this.state) {
            case 0:  
                this.truck.translateX(v2);
                this.z += v2;
                if(this.z >= world_size/5 + road_size/4){
                    this.state = 1;
                    this.truck.rotateY(-Math.PI/2);
                }
                break;
            case 1:
                this.truck.translateX(v2);
                this.x -= v2;
                if(this.x <= -world_size/5 - road_size/3){
                    this.state = 2;
                    this.truck.rotateY(-Math.PI/2);
                }
                break;
            case 2:
                this.truck.translateX(v2);
                this.z -= v2;
                if(this.z <= -world_size/5 - road_size/4){
                    this.state = 3;
                    this.truck.rotateY(-Math.PI/2);
                }
                break; 
            case 3:
                this.truck.translateX(v2);
                this.x += v2;
                if(this.x >= world_size/5 + road_size/4){
                    this.state = 0;
                    this.truck.rotateY(-Math.PI/2);
                }
                break;   

        }
        
        
    }

}


export class GrBus2 extends GrObject {
    constructor() {
		let bus = new T.Group();
        
        let front_group = new T.Group();
		let front_geom = new T.BoxGeometry( 3.5, 1, 0.8 );
		let front_mat = new T.MeshStandardMaterial({color:"#7de1e8", metalness:0.5, roughness:0.2});
        let front = new T.Mesh(front_geom, front_mat);
        let frontwin_geom = new T.BoxGeometry( 0.1, 0.5, 0.6 );
		let win_mat = new T.MeshStandardMaterial({color:"black", metalness:0.9, roughness:0.2});
        let front_window = new T.Mesh(frontwin_geom, win_mat);
        let sidewin_geom = new T.BoxGeometry( 0.5, 0.4, 0.1 );
        let side1_window = new T.Mesh(sidewin_geom, win_mat);
        let side2_window = new T.Mesh(sidewin_geom, win_mat);
        let side3_window = new T.Mesh(sidewin_geom, win_mat);
        let side4_window = new T.Mesh(sidewin_geom, win_mat);
        let side5_window = new T.Mesh(sidewin_geom, win_mat);
        let side6_window = new T.Mesh(sidewin_geom, win_mat);
        let side7_window = new T.Mesh(sidewin_geom, win_mat);
        let side8_window = new T.Mesh(sidewin_geom, win_mat);
        let ear_geom = new T.BoxGeometry( 0.1, 0.3, 0.2 );
		let ear_mat = new T.MeshStandardMaterial({color:"white", metalness:0.3, roughness:0.2});
        let ear1 = new T.Mesh(ear_geom, ear_mat);
        let ear2 = new T.Mesh(ear_geom, ear_mat);
        let sidewindows = new T.Group();
        side1_window.translateZ(0.36);
        side2_window.translateZ(-0.36);
        side3_window.translateZ(0.36);
        side4_window.translateZ(-0.36);
        side5_window.translateZ(0.36);
        side6_window.translateZ(-0.36);
        side7_window.translateZ(0.36);
        side8_window.translateZ(-0.36);
        side1_window.translateX(-0.2);
        side2_window.translateX(-0.2);
        side3_window.translateX(0.5);
        side4_window.translateX(0.5);
        side5_window.translateX(1.1);
        side6_window.translateX(1.1);
        side7_window.translateX(-0.8);
        side8_window.translateX(-0.8);
        ear1.translateZ(0.4);
        ear2.translateZ(-0.4);
        ear1.translateX(1.6);
        ear2.translateX(1.6);
        ear1.translateY(0.1);
        ear2.translateY(0.1);
        front_window.translateX(1.71);
        front_window.translateY(0.1);
        sidewindows.add(side1_window,side2_window,side3_window,side4_window,side5_window,side6_window,side7_window,side8_window);
        front_group.add(front,front_window,ear1,ear2,sidewindows);
        sidewindows.translateY(0.1);
        front_group.translateY(0.4);
        bus.add(front_group);

        let wheel_geom = new T.CylinderGeometry( 0.2, 0.2, 1, 32 );
        let wheel_mat = new T.MeshStandardMaterial({color:"black", metalness:0.3, roughness:0.8});
        let wheel1 = new T.Mesh(wheel_geom, wheel_mat);
        let wheel2 = new T.Mesh(wheel_geom, wheel_mat);
        let wheel3 = new T.Mesh(wheel_geom, wheel_mat);
        let wheel4 = new T.Mesh(wheel_geom, wheel_mat);
        wheel1.rotateX(Math.PI/2);
        wheel2.rotateX(Math.PI/2);
        wheel3.rotateX(Math.PI/2);
        wheel4.rotateX(Math.PI/2);
        wheel1.translateX(1.2);
        wheel2.translateX(0.5);
        wheel3.translateX(-0.5);
        wheel4.translateX(-1.2);
        bus.add(wheel1,wheel2,wheel3,wheel4);

        bus.translateY(0.2);

        // bus.translateZ(-1);
        // bus.translateX(-2);
        super(`Purple Bus`,bus);
        this.truck = bus;
        bus.scale.set(1.5,1.5,1.5);
        bus.position.x = -world_size/5 - road_size/4 ;
        bus.position.z = -world_size/5 - road_size/4;
        this.state = 3;
        this.x = -world_size/5 - road_size/4;
        this.z = -world_size/5 - road_size/4;
    }

    advance(delta,timeOfDay) {
        let v2 = delta/80;
        switch(this.state) {
            case 0:  
                this.truck.translateX(v2);
                this.z += v2;
                if(this.z >= world_size/5 + road_size/4){
                    this.state = 1;
                    this.truck.rotateY(-Math.PI/2);
                }
                break;
            case 1:
                this.truck.translateX(v2);
                this.x -= v2;
                if(this.x <= -world_size/5 - road_size/3){
                    this.state = 2;
                    this.truck.rotateY(-Math.PI/2);
                }
                break;
            case 2:
                this.truck.translateX(v2);
                this.z -= v2;
                if(this.z <= -world_size/5 - road_size/4){
                    this.state = 3;
                    this.truck.rotateY(-Math.PI/2);
                }
                break; 
            case 3:
                this.truck.translateX(v2);
                this.x += v2;
                if(this.x >= world_size/5 + road_size/4){
                    this.state = 0;
                    this.truck.rotateY(-Math.PI/2);
                }
                break;   

        }
        
        
    }

}


export class GrCar1 extends GrObject {
    constructor(params={}) {
		let car = new T.Group();
        
		let base_geom = new T.BoxGeometry( 2.1, 0.3, 0.8 );
		let base_mat = new T.MeshStandardMaterial({color:"#a8e87d", metalness:0.1, roughness:0.2});
        let base = new T.Mesh(base_geom, base_mat);
        let top = new T.Group();

        let top1_geometry = new T.Geometry();
        top1_geometry.vertices = [
            new T.Vector3( -0.3, 0, 0 ),//0
            new T.Vector3( 1, 0, 0 ),//1
            new T.Vector3( 1, 0, 0.8),//2
            new T.Vector3( -0.3, 0, 0.8 ),//3
            new T.Vector3( 1/4-0.2, 0.5, 0.8 ),//4
            new T.Vector3( 3/4, 0.5, 0.8 ),//5
            new T.Vector3( 3/4, 0.5, 0 ),//6
            new T.Vector3( 1/4-0.2, 0.5, 0 )//7
        ];
        top1_geometry.faces = [
            new T.Face3( 3, 2, 5 ),
            new T.Face3( 3, 5, 4 ),
            new T.Face3( 2, 1, 6 ),
            new T.Face3( 2, 6, 5 ),
            new T.Face3( 4, 5, 6 ),
            new T.Face3( 4, 6, 7 ),
            new T.Face3( 0, 3, 4 ),
            new T.Face3( 0, 4, 7 ),
            new T.Face3( 1, 0, 7 ),
            new T.Face3( 1, 7, 6 )
        ];
		let top_mat = new T.MeshStandardMaterial({color:"white", metalness:0.2, roughness:0.2});
        let top1 = new T.Mesh(top1_geometry, top_mat);
        top.add(top1);
        top1.translateZ(-0.4);
        top.translateY(0.3);
        top.translateX(0.2);

        let winfront_geometry = new T.Geometry();
        winfront_geometry.vertices = [
            new T.Vector3( -0.3+0.35/8, 0.5/4, 0.1 ),//0
            new T.Vector3( -0.3+0.35/8, 0.5/4, 0.7 ),//1
            new T.Vector3( 1/4-0.2-0.35/8, 0.5*7/8-0.01, 0.7 ),//2
            new T.Vector3( 1/4-0.2-0.35/8, 0.5*7/8-0.01, 0.1 )//3
        ];
        winfront_geometry.faces = [
            new T.Face3( 0, 1, 2 ),
            new T.Face3( 0, 2, 3 )
        ];
		let win_mat = new T.MeshStandardMaterial({color:"white", metalness:0.5, roughness:0.2});
        let front_window = new T.Mesh(winfront_geometry, win_mat);
        front_window.translateX(-0.01);
        front_window.translateZ(-0.4);

        let winback_geometry = new T.Geometry();
        winback_geometry.vertices = [
            new T.Vector3( 1-(1/4)*1/5, 0.1, 0.1 ),//0
            new T.Vector3( 1-(1/4)*1/5, 0.1, 0.7),//1
            new T.Vector3( 3/4+(1/4)*1/5, 0.4, 0.7 ),//2
            new T.Vector3( 3/4+(1/4)*1/5, 0.4, 0.1 )//3
        ];
        winback_geometry.faces = [
            new T.Face3( 1, 0, 3 ),
            new T.Face3( 1, 3, 2 )
        ];
        let back_window = new T.Mesh(winback_geometry, win_mat);
        back_window.translateX(0.01);
        back_window.translateZ(-0.4);

        let sidewin_geom = new T.BoxGeometry( 0.45, 0.3, 0.1 );
        let side1_window = new T.Mesh(sidewin_geom, win_mat);
        let side2_window = new T.Mesh(sidewin_geom, win_mat);
        side1_window.translateZ(0.351);
        side2_window.translateZ(-0.351);
        side1_window.translateY(0.25);
        side2_window.translateY(0.25);
        side1_window.translateX(0.3);
        side2_window.translateX(0.3);

        top.add(front_window,back_window,side1_window,side2_window);
        car.add(base, top);
        base.rotation.y = Math.PI;
        top.rotation.y = Math.PI;
        base.translateY(0.2);

        let wheel_geom = new T.CylinderGeometry( 0.2, 0.2, 1, 32 );
        let wheel_mat = new T.MeshStandardMaterial({color:"black", metalness:0.3, roughness:0.8});
        let wheel1 = new T.Mesh(wheel_geom, wheel_mat);
        let wheel2 = new T.Mesh(wheel_geom, wheel_mat);
        wheel1.rotateX(Math.PI/2);
        wheel2.rotateX(Math.PI/2);
        wheel1.translateX(-0.5);
        wheel2.translateX(0.5);
        let wheels_group = new T.Group();
        wheels_group.add(wheel1,wheel2);
        car.add(wheels_group);
        

        car.translateY(0.2);
        let scale = 1.5;
        car.scale.set(scale,scale,scale);

        super(`White Car`,car);
        this.truck = car;
        car.position.x = -world_size/5 + road_size/4 ;//+ (world_size/5)*params.num/10;
        car.position.z = world_size/5 - road_size/4;
        this.state = 0;
        this.x = -world_size/5 + road_size/4 ;//+ (world_size/5)*params.num/10;
        this.z = world_size/5 - road_size/4;
    }

    advance(delta,timeOfDay) {
        let v = delta/70;
        switch(this.state) {
            case 0:  
                this.truck.translateX(v);
                this.z -= v;
                if(this.z <= -world_size/5 + road_size/4){
                    this.state = 1;
                    this.truck.rotateY(Math.PI/2);
                }
                break;
            case 1:
                this.truck.translateX(v);
                this.x += v;
                if(this.x >= world_size/5 - road_size/4){
                    this.state = 2;
                    this.truck.rotateY(Math.PI/2);
                }
                break;
            case 2:
                this.truck.translateX(v);
                this.z += v;
                if(this.z >= world_size/5 - road_size/4){
                    this.state = 3;
                    this.truck.rotateY(Math.PI/2);
                }
                break; 
            case 3:
                this.truck.translateX(v);
                this.x -= v;
                if(this.x <= -world_size/5 + road_size/3){
                    this.state = 0;
                    this.truck.rotateY(Math.PI/2);
                }
                break;   

        }
        
        
    }

}


export class GrCar2 extends GrObject {
    constructor() {
		let car = new T.Group();
        
		let base_geom = new T.BoxGeometry( 2.1, 0.3, 0.8 );
		let base_mat = new T.MeshStandardMaterial({color:"yellow", metalness:0.5, roughness:0.2});
        let base = new T.Mesh(base_geom, base_mat);
        let top = new T.Group();

        let top1_geometry = new T.Geometry();
        top1_geometry.vertices = [
            new T.Vector3( -0.3, 0, 0 ),//0
            new T.Vector3( 1, 0, 0 ),//1
            new T.Vector3( 1, 0, 0.8),//2
            new T.Vector3( -0.3, 0, 0.8 ),//3
            new T.Vector3( 1/4-0.2, 0.5, 0.8 ),//4
            new T.Vector3( 3/4, 0.5, 0.8 ),//5
            new T.Vector3( 3/4, 0.5, 0 ),//6
            new T.Vector3( 1/4-0.2, 0.5, 0 )//7
        ];
        top1_geometry.faces = [
            new T.Face3( 3, 2, 5 ),
            new T.Face3( 3, 5, 4 ),
            new T.Face3( 2, 1, 6 ),
            new T.Face3( 2, 6, 5 ),
            new T.Face3( 4, 5, 6 ),
            new T.Face3( 4, 6, 7 ),
            new T.Face3( 0, 3, 4 ),
            new T.Face3( 0, 4, 7 ),
            new T.Face3( 1, 0, 7 ),
            new T.Face3( 1, 7, 6 )
        ];
		let top_mat = new T.MeshStandardMaterial({color:"yellow", metalness:0.2, roughness:0.2});
        let top1 = new T.Mesh(top1_geometry, top_mat);
        top.add(top1);
        top1.translateZ(-0.4);
        top.translateY(0.3);
        top.translateX(0.3);

        let winfront_geometry = new T.Geometry();
        winfront_geometry.vertices = [
            new T.Vector3( -0.3+0.35/8, 0.5/4, 0.1 ),//0
            new T.Vector3( -0.3+0.35/8, 0.5/4, 0.7 ),//1
            new T.Vector3( 1/4-0.2-0.35/8, 0.5*7/8-0.01, 0.7 ),//2
            new T.Vector3( 1/4-0.2-0.35/8, 0.5*7/8-0.01, 0.1 )//3
        ];
        winfront_geometry.faces = [
            new T.Face3( 0, 1, 2 ),
            new T.Face3( 0, 2, 3 )
        ];
		let win_mat = new T.MeshStandardMaterial({color:"black", metalness:0.5, roughness:0.2});
        let front_window = new T.Mesh(winfront_geometry, win_mat);
        front_window.translateX(-0.01);
        front_window.translateZ(-0.4);

        let winback_geometry = new T.Geometry();
        winback_geometry.vertices = [
            new T.Vector3( 1-(1/4)*1/5, 0.1, 0.1 ),//0
            new T.Vector3( 1-(1/4)*1/5, 0.1, 0.7),//1
            new T.Vector3( 3/4+(1/4)*1/5, 0.4, 0.7 ),//2
            new T.Vector3( 3/4+(1/4)*1/5, 0.4, 0.1 )//3
        ];
        winback_geometry.faces = [
            new T.Face3( 1, 0, 3 ),
            new T.Face3( 1, 3, 2 )
        ];
        let back_window = new T.Mesh(winback_geometry, win_mat);
        back_window.translateX(0.01);
        back_window.translateZ(-0.4);

        let sidewin_geom = new T.BoxGeometry( 0.45, 0.3, 0.1 );
        let side1_window = new T.Mesh(sidewin_geom, win_mat);
        let side2_window = new T.Mesh(sidewin_geom, win_mat);
        side1_window.translateZ(0.351);
        side2_window.translateZ(-0.351);
        side1_window.translateY(0.25);
        side2_window.translateY(0.25);
        side1_window.translateX(0.3);
        side2_window.translateX(0.3);

        top.add(front_window,back_window,side1_window,side2_window);
        base.translateY(0.2);

        let wheel_geom = new T.CylinderGeometry( 0.2, 0.2, 1, 32 );
        let wheel_mat = new T.MeshStandardMaterial({color:"black", metalness:0.3, roughness:0.8});
        let wheel1 = new T.Mesh(wheel_geom, wheel_mat);
        let wheel2 = new T.Mesh(wheel_geom, wheel_mat);
        wheel1.rotateX(Math.PI/2);
        wheel2.rotateX(Math.PI/2);
        wheel1.translateX(-0.5);
        wheel2.translateX(0.5);
        car.add(base, top, wheel1,wheel2);
        car.translateY(0.2);
        
        base.rotation.y = Math.PI;
        top.rotation.y = Math.PI;

        let scale = 1.5;
        car.scale.set(scale,scale,scale);
        car.translateY(0.2);

        super(`Yellow Car`,car);
        this.truck = car;
        
        car.position.x = 0 ;
        car.position.z = world_size/5 - road_size/4;
        this.state = 3;
        this.x = 0;
        this.z = world_size/5 - road_size/4;
    }

    advance(delta,timeOfDay) {
        let v = delta/70;
        switch(this.state) {
            case 0:  
                this.truck.translateX(v);
                this.z -= v;
                if(this.z <= -world_size/5 + road_size/4){
                    this.state = 1;
                    this.truck.rotateY(Math.PI/2);
                }
                break;
            case 1:
                this.truck.translateX(v);
                this.x += v;
                if(this.x >= world_size/5 - road_size/4){
                    this.state = 2;
                    this.truck.rotateY(Math.PI/2);
                }
                break;
            case 2:
                this.truck.translateX(v);
                this.z += v;
                if(this.z >= world_size/5 - road_size/4){
                    this.state = 3;
                    this.truck.rotateY(Math.PI/2);
                }
                break; 
            case 3:
                this.truck.translateX(v);
                this.x -= v;
                if(this.x <= -world_size/5 + road_size/3){
                    this.state = 0;
                    this.truck.rotateY(Math.PI/2);
                }
                break;   

        }
        
        
        
    }

}



export class GrBus extends GrObject {
    constructor() {
		let vehicleModel = new T.Group();
        let rearModel = new T.Group();
        let sidewindows = new T.Group();

        // setting up the car 
		let rearGeometry = new T.BoxGeometry( 4.5, 1, 0.8 );
		let rearmaterial = new T.MeshStandardMaterial({color:"#ebc034", metalness:0.6, roughness:0.8});
        let rearMesh = new T.Mesh(rearGeometry, rearmaterial);

        let frontLight = new T.CircleGeometry(2, 50);
        let lightMaterial = new T.MeshStandardMaterial({color:"white", metalness:0.6, roughness:0.8});
        let lightmesh = new T.Mesh(frontLight, lightMaterial);
       
        // setting up the front window 
        let rearWindowGeo = new T.BoxGeometry( 0.1, 0.5, 0.7 );
        rearWindowGeo.translate(0.5,0,0);
        let windowMaterial = new T.MeshStandardMaterial({color:"white", metalness:0.8, roughness:0.9});
        let rearwindowMesh = new T.Mesh(rearWindowGeo, windowMaterial);

        // setting up the side windows 
        let sideWindowGeo = new T.BoxGeometry( 0.5, 0.5, 0.1 );
        let first = new T.Mesh(sideWindowGeo, windowMaterial);
        let second = new T.Mesh(sideWindowGeo, windowMaterial);
        let third = new T.Mesh(sideWindowGeo, windowMaterial);
        let fourth = new T.Mesh(sideWindowGeo, windowMaterial);
        let fifth = new T.Mesh(sideWindowGeo, windowMaterial);
        let sixth = new T.Mesh(sideWindowGeo, windowMaterial);
        let seventh = new T.Mesh(sideWindowGeo, windowMaterial);
        let eightth = new T.Mesh(sideWindowGeo, windowMaterial);
        
        let driverMirror = new T.BoxGeometry( 0.3, 0.5, 0.1 );
        let ninth = new T.Mesh(driverMirror, windowMaterial);
        let tenth = new T.Mesh(driverMirror, windowMaterial);

        let eleven = new T.Mesh(sideWindowGeo, windowMaterial);
        let twelve = new T.Mesh(sideWindowGeo, windowMaterial);


        // setting up the mirror 
        let mirror = new T.BoxGeometry( 0.1, 0.4, 0.25 );
		let mirrorMaterial = new T.MeshStandardMaterial({color:"white", metalness:0.9, roughness:0.2});
        let leftMirror = new T.Mesh(mirror, mirrorMaterial);
        let secondMirror = new T.Mesh(mirror, mirrorMaterial);
       
        // translate z axis 
        first.translateZ(0.355);
        second.translateZ(-0.355);
        third.translateZ(0.355);
        fourth.translateZ(-0.355);
        fifth.translateZ(0.355);
        sixth.translateZ(-0.355);
        seventh.translateZ(0.355);
        eightth.translateZ(-0.355);
        ninth.translateZ(0.355);
        tenth.translateZ(-0.355);
        eleven.translateZ(0.355);
        twelve.translateZ(-0.355);
        // translate x axis
        first.translateX(-0.1);
        second.translateX(-0.1);
        
        third.translateX(0.5);
        fourth.translateX(0.5);
        
        fifth.translateX(1.1);
        sixth.translateX(1.1);

        seventh.translateX(-0.7);
        eightth.translateX(-0.7);
        ninth.translateX(1.9);
        tenth.translateX(1.9);

        eleven.translateX(-1.4);
        twelve.translateX(-1.4);

        leftMirror.translateZ(0.35);
        secondMirror.translateZ(-0.35);

        leftMirror.translateX(2.15);
        secondMirror.translateX(2.15);

        leftMirror.translateY(0.2);
        secondMirror.translateY(0.2);

        rearwindowMesh.translateX(1.72);
        rearwindowMesh.translateY(0.15);

        sidewindows.add(first,second,third,fourth,fifth,sixth,seventh,eightth, ninth, tenth, eleven, twelve);
        rearModel.add(rearMesh,rearwindowMesh,leftMirror,secondMirror,sidewindows);
        sidewindows.translateY(0.1);
        rearModel.translateY(0.4);
        vehicleModel.add(rearModel);

        let tireGeo = new T.CylinderGeometry( 0.25, 0.25, 0.9, 50);
        let tirematerial = new T.MeshStandardMaterial({color:"black", metalness:0.9, roughness:0.8});
        let tire1 = new T.Mesh(tireGeo, tirematerial);
        let tire2 = new T.Mesh(tireGeo, tirematerial);
        let tire3 = new T.Mesh(tireGeo, tirematerial);
        let tire4 = new T.Mesh(tireGeo, tirematerial);
        let tire5 = new T.Mesh(tireGeo, tirematerial);
        let tire6 = new T.Mesh(tireGeo, tirematerial);

        tire1.rotateX(Math.PI/2);
        tire2.rotateX(Math.PI/2);
        tire3.rotateX(Math.PI/2);
        tire4.rotateX(Math.PI/2);
        tire5.rotateX(Math.PI/2);
        tire6.rotateX(Math.PI/2);

        tire1.translateX(1.2);
        tire2.translateX(0.5);
        tire3.translateX(-0.5);
        tire4.translateX(-1.2);
        tire5.translateX(-1.8);
        tire6.translateX(1.8);
        vehicleModel.add(tire1,tire2,tire3,tire4,tire5, tire6);
        vehicleModel.translateY(0.2);
        super(`bus`,vehicleModel);
    }

   
    

}