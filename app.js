var canvas, ctx ;
const fps = 30;
const speed = (fps/24)*(window.innerHeight/300)*0.01; //sets the speed of the object
var cntrX , cntrY ;
var cube1 , planeCube;
var V1, V2, plane;
var gameOn = true;
var keyPressed;
var factor = 4.5 * (1920 / window.innerWidth);

//vtx class to store x,y,z co ordinates of a point 
class vtx{
    constructor(x,y,z){
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.z = parseFloat(z);
    }
}

//cube class used to store state of the cube
class cube {
    vtx1 = new vtx(0,0,0);
    //these vertexes are stored for printing on the 2D screen , the z value for these points are 0
    printV1 = new vtx(0,0,0);
    printV2 = new vtx(0,0,0);
    printV3 = new vtx(0,0,0);
    printV4 = new vtx(0,0,0);
    printV5 = new vtx(0,0,0);
    printV6 = new vtx(0,0,0);
    printV7 = new vtx(0,0,0);
    printV8 = new vtx(0,0,0);

    constructor(L, v1) {
        this.vtx1.x = v1.x;
        this.vtx1.y = v1.y;
        this.vtx1.z = v1.z;
        this.L = parseFloat(L);
    }
}

window.onload = function()
{
    canvas = document.getElementById('box');
    ctx = canvas.getContext('2d');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //these are the center of the canvas
    cntrX = canvas.width/2 ;
    cntrY = canvas.height/2 ;
    //initalise() is used to initialize the cube objects
    initialize();
    //rendering one frame before starting the evaluation of the rest of the program.
    frame();
    //this part is used to check for input and used to control the cube co ordinates of the cube
    document.addEventListener('keydown',(e)=>{
        keyPressed = e.keyCode;
    });
    console.log(gameOn);
    //the game is put on loop
    setInterval(function(){
        if(gameOn)
        {
            frame();
        }
        else{}
    },1000/fps);
    
}

//this is the function being called every frame
function frame()
{
    stateModify(cube1);
    drawStatics(planeCube);
    drawRect(cube1);
}

function initialize()
{
    //these values are set as of now to be at 50,50 w.r.t the center
    V1 = new vtx(500,500, 0);
    cube1 = new cube(100, V1);
    plane = new vtx(window.innerWidth/2, window.height, 0);
    planeCube = new cube(window.innerWidth/2, plane);
}

function stateModify(obj)
{
    // <= makes the cube go left
    // ^ makes the cube go away from camera
    // => makes the cube go right
    // v makes the cube go towards camera 
    if(keyPressed == 37)
    {
        obj.vtx1.x -= 80*speed;
    }
    else if(keyPressed == 38)
    {
        obj.vtx1.z += speed;
    }
    else if(keyPressed == 39)
    {
        obj.vtx1.x += 80*speed;
    }
    else if(keyPressed == 40)
    {
        obj.vtx1.z -= speed;
    }

    var scale = window.innerWidth/factor;
    //assigning the projected 2D co ordinates using the 3D values
    obj.printV1 = flat(obj.vtx1.x, obj.vtx1.y, obj.vtx1.z);
    obj.printV2 = flat(obj.vtx1.x, obj.vtx1.y, obj.vtx1.z - obj.L/scale);
    obj.printV3 = flat(obj.vtx1.x + obj.L, obj.vtx1.y, obj.vtx1.z - obj.L/scale);
    obj.printV4 = flat(obj.vtx1.x + obj.L, obj.vtx1.y, obj.vtx1.z);
    obj.printV5 = flat(obj.vtx1.x, obj.vtx1.y + obj.L, obj.vtx1.z);
    obj.printV6 = flat(obj.vtx1.x, obj.vtx1.y + obj.L, obj.vtx1.z - obj.L/scale);
    obj.printV7 = flat(obj.vtx1.x + obj.L, obj.vtx1.y + obj.L, obj.vtx1.z - obj.L/scale);
    obj.printV8 = flat(obj.vtx1.x + obj.L, obj.vtx1.y + obj.L, obj.vtx1.z);

    /*obj.printV1.x = cntrX + ((obj.vtx1.z + 1)*(obj.vtx1.x - cntrX));
    obj.printV1.y = cntrY + ((obj.vtx1.z + 1)*(obj.vtx1.y - cntrX));
    obj.printV2.x = cntrX + ((obj.vtx1.z - obj.L/300 + 1)*(obj.vtx1.x - cntrX));
    obj.printV2.y = cntrY + ((obj.vtx1.z - obj.L/300 + 1)*(obj.vtx1.y - cntrX));*/
}

//used to convert 3D points to 2D 
function flat(x,y,z)
{
    obj = new vtx(0,0,0);
    obj.x = x;
    obj.y = y;
    obj.z = Math.pow((z/factor),1); //factor is screen factor
    obj.x = cntrX + ((obj.x - cntrX)/(obj.z + 1));
    obj.y = cntrY + ((obj.y - cntrX)/(obj.z + 1));
    return obj;
}