/*jshint esversion: 6 */
// @ts-check



// get things we need
import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

let yellow = 1; let blue = 1; let brown = 1; let lighthousenum=1;

export class GrBuilding1 extends GrObject {
    constructor(params={}) {
        let geometry = new T.Geometry();
        let width = 2, height = 1;
        geometry.vertices.push(new T.Vector3( 0,0, 0));//0
        geometry.vertices.push(new T.Vector3( width,0, 0));//1
        geometry.vertices.push(new T.Vector3( width,0, width));//2
        geometry.vertices.push(new T.Vector3( 0,0, width));//3
        geometry.vertices.push(new T.Vector3( 0,height, width));//4
        geometry.vertices.push(new T.Vector3( 0,height, 0));//5
        geometry.vertices.push(new T.Vector3( width,height, 0));//6
        geometry.vertices.push(new T.Vector3( width,height, width));//7
        geometry.vertices.push(new T.Vector3( width,height*1.5, width/2));//8
        geometry.vertices.push(new T.Vector3( 0,height*1.5, width/2));//9
        //window
        height = height-0.5, width = width + 0.01;
        geometry.vertices.push(new T.Vector3( 1.2*width/3-0.5,height/1.5, width));//10
        geometry.vertices.push(new T.Vector3( 1.2*width*2/3-0.5,height/1.5, width));//11
        geometry.vertices.push(new T.Vector3( 1.2*width*2/3-0.5,height/1.5+1.5*width/6, width));//12
        geometry.vertices.push(new T.Vector3( 1.2*width/3-0.5,height/1.5+1.5*width/6, width));//13
        //door
        height = height;
        let door_width=0.4,width2 = width -0.3;
        geometry.vertices.push(new T.Vector3( width2-door_width,0, width));//14
        geometry.vertices.push(new T.Vector3( width2,0, width));//15
        geometry.vertices.push(new T.Vector3( width2,door_width*2, width));//16
        geometry.vertices.push(new T.Vector3( width2-door_width,door_width*2, width));//17
        
        //
        geometry.faceVertexUvs = [ [] ];
        let f1 = new T.Face3(3,2,7);
        geometry.faces.push(f1);
        geometry.faceVertexUvs[0].push([new T.Vector2(1/3,1/3), new T.Vector2(2/3,1/3), new T.Vector2(2/3,2/3)]);
        let f2 = new T.Face3(3,7,4);
        geometry.faces.push(f2);
        geometry.faceVertexUvs[0].push([new T.Vector2(1/3,1/3), new T.Vector2(2/3,2/3), new T.Vector2(1/3,2/3)]);
        let f3 = new T.Face3(2,1,6);
        geometry.faces.push(f3);
        geometry.faceVertexUvs[0].push([new T.Vector2(2/3,1/3), new T.Vector2(1,1/3), new T.Vector2(1,2/3)]);
        let f4 = new T.Face3(2,6,7);
        geometry.faces.push(f4);
        geometry.faceVertexUvs[0].push([new T.Vector2(2/3,1/3), new T.Vector2(1,2/3), new T.Vector2(2/3,2/3)]);
        let f5 = new T.Face3(4,7,6);
        geometry.faces.push(f5);
        geometry.faceVertexUvs[0].push([new T.Vector2(1/3,2/3), new T.Vector2(2/3,2/3), new T.Vector2(2/3,1)]);
        let f6 = new T.Face3(4,6,5);
        geometry.faces.push(f6);
        geometry.faceVertexUvs[0].push([new T.Vector2(1/3,2/3), new T.Vector2(2/3,1), new T.Vector2(1/3,1)]);
        let f7 = new T.Face3(0,3,4);
        geometry.faces.push(f7);
        geometry.faceVertexUvs[0].push([new T.Vector2(0,1/3), new T.Vector2(1/3,1/3), new T.Vector2(1/3,2/3)]);
        let f8 = new T.Face3(0,4,5);
        geometry.faces.push(f8);
        geometry.faceVertexUvs[0].push([new T.Vector2(0,1/3), new T.Vector2(1/3,2/3), new T.Vector2(0,2/3)]);
        let f9 = new T.Face3(0,1,2);
        geometry.faces.push(f9);
        geometry.faceVertexUvs[0].push([new T.Vector2(1/3,0), new T.Vector2(2/3,0), new T.Vector2(2/3,1/3)]);
        let f10 = new T.Face3(0,2,3);
        geometry.faces.push(f10);
        geometry.faceVertexUvs[0].push([new T.Vector2(1/3,0), new T.Vector2(2/3,1/3), new T.Vector2(1/3,1/3)]);
        
        let f11 = new T.Face3(1,0,5);
        geometry.faces.push(f11);
        geometry.faceVertexUvs[0].push([new T.Vector2(2/3,0), new T.Vector2(1,0), new T.Vector2(1,1/3)]);
        let f12 = new T.Face3(1,5,6);
        geometry.faces.push(f12);
        geometry.faceVertexUvs[0].push([new T.Vector2(2/3,0), new T.Vector2(1,1/3), new T.Vector2(2/3,1/3)]);
        
        geometry.computeFaceNormals();
        geometry.uvsNeedUpdate=true;
        let tl=new T.TextureLoader().load("./Pictures/wallTexture.jpg");
        let material = new T.MeshStandardMaterial({map:tl});
        
        //roof
        let f21 = new T.Face3(4,7,8);
        f21.materialIndex = 1;
        geometry.faces.push(f21);
        geometry.faceVertexUvs[0].push([new T.Vector2(0,0), new T.Vector2(1,0), new T.Vector2(1,1)]);
        let f22 = new T.Face3(4,8,9);
        f22.materialIndex = 1;
        geometry.faces.push(f22);
        geometry.faceVertexUvs[0].push([new T.Vector2(0,0), new T.Vector2(1,1), new T.Vector2(0,1)]);
        let f23 = new T.Face3(6,5,9);
        f23.materialIndex = 1;
        geometry.faces.push(f23);
        geometry.faceVertexUvs[0].push([new T.Vector2(0,0), new T.Vector2(1,0), new T.Vector2(1,1)]);
        let f24 = new T.Face3(6,9,8);
        f24.materialIndex = 1;
        geometry.faces.push(f24);
        geometry.faceVertexUvs[0].push([new T.Vector2(0,0), new T.Vector2(1,1), new T.Vector2(0,1)]);
        let f25 = new T.Face3(9,5,4);
        f25.materialIndex = 1;
        geometry.faces.push(f25);
        geometry.faceVertexUvs[0].push([new T.Vector2(0,0), new T.Vector2(1,0), new T.Vector2(1,1)]);
        let f26 = new T.Face3(8,7,6);
        f26.materialIndex = 1;
        geometry.faces.push(f26);
        geometry.faceVertexUvs[0].push([new T.Vector2(0,0), new T.Vector2(1,1), new T.Vector2(0,1)]);
        
        //window
        let f33 = new T.Face3(10,11,12);
        f33.materialIndex = 2;
        geometry.faces.push(f33);
        geometry.faceVertexUvs[0].push([new T.Vector2(0,0), new T.Vector2(1,0), new T.Vector2(1,1)]);
        let f34 = new T.Face3(10,12,13);
        f34.materialIndex = 2;
        geometry.faces.push(f34);
        geometry.faceVertexUvs[0].push([new T.Vector2(0,0), new T.Vector2(1,1), new T.Vector2(0,1)]);
       
        //door
        let f43 = new T.Face3(14,15,16);
        f43.materialIndex = 3;
        geometry.faces.push(f43);
        geometry.faceVertexUvs[0].push([new T.Vector2(0,0), new T.Vector2(1,0), new T.Vector2(1,1)]);
        let f44 = new T.Face3(14,16,17);
        f44.materialIndex = 3;
        geometry.faces.push(f44);
        geometry.faceVertexUvs[0].push([new T.Vector2(0,0), new T.Vector2(1,1), new T.Vector2(0,1)]);
       
        geometry.computeFaceNormals();
        geometry.uvsNeedUpdate=true;

        let t2=new T.TextureLoader().load("./Pictures/roofTexture.jpg");
        let material2 = new T.MeshStandardMaterial({map:t2});
        let t3=new T.TextureLoader().load("./Pictures/windowTexture.jpg");
        let material3 = new T.MeshStandardMaterial({map:t3});
        let t4=new T.TextureLoader().load("./Pictures/door1.jpg");
        let material4 = new T.MeshStandardMaterial({map:t4});
        let mesh = new T.Mesh(geometry,[material, material2,material3, material4]);

        super(`Yellow House-${yellow++}`,mesh);
        this.whole_ob = mesh;
        this.whole_ob.position.x = params.x ? Number(params.x) : 0;
        this.whole_ob.position.y = params.y ? Number(params.y) : 0;
		this.whole_ob.position.z = params.z ? Number(params.z) : 0;
        let scale = params.size ? Number(params.size) : 1;
        this.whole_ob.scale.set(scale,scale,scale);

        this.rotate = params.rotate ? Number(params.rotate) : 0;
        switch(this.rotate) {
            case 0: 
                break;
            case 1:
                mesh.rotation.y = Math.PI/2;
                break;
            case 2:
                mesh.rotation.y = -Math.PI/2;
                break;
        } 
    }
}


let tree_counter = 0;

export class GrTree extends GrObject {
    constructor(x, y, z, num=10) {

    let material = new T.MeshStandardMaterial({color: "brown", roughness: 1, metalness: 0.9});
    let point1 = new T.Vector2(0.5, 0);
    let point2 = new T.Vector2(0.2, 8);
    let pointsConstruct = [point1, point2];
    let treeStem = new T.LatheGeometry(pointsConstruct, 9);
    treeStem.computeFlatVertexNormals();
    let treeBranch = new T.LatheGeometry(pointsConstruct, 4);
    treeBranch.computeFlatVertexNormals();
    treeBranch.rotateX(Math.PI/2);
    let treebase = new T.Mesh(treeStem, material);
    
    for (let i = 0; i < num; i++) {
        let ram = Math.random()*6;
        let y = ram;
        let numb = new T.Mesh(treeBranch, material);
    
        let  rotation = Math.random()*Math.PI*2;
        let rotationran = Math.PI/2 - Math.random()*Math.PI/4;
        let n1 = Math.cos(rotation)*Math.sin(rotationran);
        let n2 = Math.cos(rotationran);
        let n3 = Math.sin(rotationran)*Math.sin(rotation);

        numb.lookAt(new T.Vector3(n1, n2, n3));
        numb.position.y = y + 2;
        let scale = 2/numb.position.y; 
        let scaleTree = (scale + 1)*0.25;
        numb.scale.set(scaleTree, scaleTree, scaleTree);
        treebase.add(numb);

        let chunk = new T.SphereGeometry((scale + 6)/2, 6, 3);
        chunk.computeFlatVertexNormals();
        let mat = new T.MeshStandardMaterial({color: "green", roughness: 1, metalness: 0})
        let chunkMesh = new T.Mesh(chunk, mat);
        numb.add(chunkMesh);
        chunkMesh.position.z = 8;
    }
    treebase.position.set(x, y, z);
    treebase.scale.set(0.2, 0.2, 0.2);
    tree_counter++;
    super(`tree_${tree_counter}`, treebase);
    }
}