# README.md file for Workbook 12

Note: filling out this file is extremely important. If you don't describe your assignment here, we may not be able to give you points for things.

- ** Name: Kunlun Wang ** 
- ** GitHub ID: kunlunW** 
- ** WiscID: 907 809 8895 **

See README-example.md in the examples directory for ideas on what we are looking for.

## Artist Statement

Describe what you were trying to make:


Features:
1. Many trees! 
2. 4 Apartment buildings with different textures. (With lightning rods on the roof of each of them)
3. 3 different kinds of private houses, each with different textures and roof types
4. Two giant skyscrapers (OBJ) that I loaded from internet.
5. 5 different kinds of park objects (swing, roundabout, Carousel, reflection sphere, fountain)
6. Train track on a high-lifted bridge 
7. A train 
8. Helicopter and Helipad (I used the code from the example)


## Straightforward Checks

Please list how your assignment fills the requirements. In cases where you have more than the requirements (e.g., 2,3,5,6) just list the most interesting ones. A short description (a few words) is probably sufficient. Leave blank or say "N/A" for things you didn't do.

Note: the other checks we can see easily.

2. 2 different kinds of objects that you made (just list 2)
    1. train 
    2. Apartment Buildings 

3.  5 different kinds of objects beyond #2. (just list 5)
    1. trees 
    2. Carousel 
    3. reflective sphere 
    4. private homes 
    5. fountain (Using shaders)

5. 3 different behaviors. (just list 3)
    1. Train going along its track
    2. Cars/trucks/buses traveling along the streets
    3. fountain flowing

6. At least 3 objects must be "rideable"
    1. The train 
    2. Each vechicle on the street (5 of them)
    3. Helicopter 

7. "train track" with a "train" (tell us how we know its a spline)
    1. The train track is made by Bezier curve with four control points, and if you look closely enough 
    you can actually see those four control points in the graphics town
    2. I used similar methods as in WB06
    3. The first step is to convert to Bezier curve, create some BezierCurve array, derivative array, and arc table array, and segment array 
    3. Then use the arc table to draw the rail beam
    4. Then use the list of control points, use CubicBezierCurve3() and we get the curve in 3D 
    5. Then draw the control points as a tiny sphere for debugging purposes 

8. One object from each category
    - buildings: Apartment buildings, skyscraper, private homes 
    - natural elements: trees,
    - vehicles: bus, truck, train, cars

9. There is at least one model loaded from a file. (e.g. loading a `.obj` or `.fbx` file)
    1. The skyscraper (An OBJ file that I loaded)
    file name: 
    1) San Fran Tower.obj 
    2) San Fran Tower.mtl


10. There is at least one shader that you wrote.
    - what object is it on: A sphere 
    - describe: I used this shader to make the sphere looks like water flowing out of the fountain  
    - filename: fountain.fs / fountain.vs 

12. SkyBox or some other texture (list one - and say why you didn't have skybox if you don't have one)
    1. I used a sunny mountain skybox theme

## Complexity Points

Describe each thing that you did that you think is worth complexity points.
1. I built a bridge for the train tracks and train 
2. I built a train car that is quite complex in shape
3. I built many vechicle of different types and made them run on the street
4. I built many trees --> I like the town to be environmental friendly
5. I built a water fountain using shaders
6. I uploaded a skyscraper 

If possible, order them from most interesting to least interesting.
1. The train and the bridge 
2. forests
3. fountain 
4. the skyscraper OBJ 


Describe what the thing is, where we can see it, and why it deserves complexity points.

Note: put "####" (4 hash marks) and number the complex things to make it easier for us to identify them, but put the description on a separate line. We've given you the first 2 headers

#### Complex Thing 1:  The train and its track 
Description: The track is made by creating a bezier curve with some control points, and the bridge is also built 
based on the bezier curve. And the train is animated using the tick() function. The Train car is made of complex 
structure. 

#### Complex Thing 2: The forests
Description: The abundance of the forests might be the most obvious feature of my project. The forests in my project 
serve to beutify the town and promote the public's awareness toward forests protection

#### Complex Thing 3: fountain 
Description: The fountain can be found in the central block of the graphics town, it is created using a shader that 
shade a sphere to be a water ball, and the flowing effect is animnated using a tick() function 

#### Complex Thing 4: Apartment Buildings
Description: There are 4 apt buildings in graphics town, and each has different textures and is composed of multiple parts(a lightning rod and a roof complex). 


## Screenshots
1. graphics town overview: 
![overview](https://user-images.githubusercontent.com/52982585/80853226-894c9500-8bf4-11ea-9f4e-996f120b719f.jpg)

List the pictures that you made with a brief description

## Other Notes to the Graders

The two OBJ objects I have in the graphics town make it very slow to load, and lagging. 

## Attributions (including self-attributions)

1. I used the example code to create a helicopter and helipad 

2. Texture I used: 
    a) https://www.pinterest.com/pin/483222234998859687/
    b) https://clipartart.com/categories/house-craft-printables-windows-and-door-clipart.html
    c) https://www.textures.com/category/roofing/108
    d) https://elements.envato.com/old-white-brick-wall-background-texture-PN85D8Q 
    e) http://www.textures4photoshop.com/tex/water-and-liquid/seamless-transparent-water-ocean-ground-texture.aspx 
    f) https://opengameart.org/content/cloudy-skyboxes 

3. OBJ file I upload: 
https://free3d.com/3d-model/evilgits-san-fran-tower-815041.html



## Consent

// The student consents to having their assignment shown in Galleries and Peer Review.

(if you do not provide consent, remove the line giving consent)
