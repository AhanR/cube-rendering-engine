// file:///D:/webdev/css-html-js/gameBox/index.html
//try using p5
//write length formula
var canvas, ctx ;
const fps = 0.5;
const speed = (fps/24)*0.005; //sets the speed of the object
var cntrX , cntrY ;
var cube1;
var V1, V2;
var gameOn = true;
var keyPressed;

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
    //these are the center of the canvas
    cntrX = canvas.width/2 ;
    cntrY = canvas.height/2 ;
    //initalise() is used to initialize the cube objects
    initialize();
    //rendering one frame before starting the evaluation of the rest of the program.
    frame();
    //this part is used to check for input and used to control the cube co ordinates of the cube
    document.addEventListener('keydown',keyCheck);
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
    drawRect(cube1)
}

function initialize()
{
    //these values are set as of now to be at 50,50 w.r.t the center
    V1 = new vtx(cntrX - 50, cntrY + 50, 0);
    cube1 = new cube(10, V1);
}

function stateModify(obj)
{
    // -1 makes the cube go left
    // 0 makes the cube go away from camera
    // 1 makes the cube go right
    // 2 makes the cube go towards camera 
    if(keyPressed == -1)
    {
        obj.vtx1.x -= 80*speed;
    }
    else if(keyPressed == 0)
    {
        obj.vtx1.z += speed;
    }
    else if(keyPressed == 1)
    {
        obj.vtx1.x += 80*speed;
    }
    else if(keyPressed == 2)
    {
        obj.vtx1.z -= speed;
    }

    //assigning the projected 2D co ordinates using the 3D values
    //the function flat seems to not be working for some reason which I cannot understand
    obj.printV1 = flat(obj.vtx1.x, obj.vtx1.y, obj.vtx1.z);
    obj.printV2 = flat(obj.vtx1.x, obj.vtx1.y, obj.vtx1.z - obj.L/300);
    obj.printV3 = flat(obj.vtx1.x + obj.L, obj.vtx1.y, obj.vtx1.z - obj.L/300);
    obj.printV4 = flat(obj.vtx1.x + obj.L, obj.vtx1.y, obj.vtx1.z);
    obj.printV5 = flat(obj.vtx1.x, obj.vtx1.y + obj.L, obj.vtx1.z);
    obj.printV6 = flat(obj.vtx1.x, obj.vtx1.y + obj.L, obj.vtx1.z - obj.L/300);
    obj.printV7 = flat(obj.vtx1.x + obj.L, obj.vtx1.y + obj.L, obj.vtx1.z - obj.L/300);
    obj.printV8 = flat(obj.vtx1.x + obj.L, obj.vtx1.y + obj.L, obj.vtx1.z);



    
    /*obj.printV1.x = cntrX + ((obj.vtx1.z + 1)*(obj.vtx1.x - cntrX));
    obj.printV1.y = cntrY + ((obj.vtx1.z + 1)*(obj.vtx1.y - cntrX));
    obj.printV2.x = cntrX + ((obj.vtx1.z - obj.L/300 + 1)*(obj.vtx1.x - cntrX));
    obj.printV2.y = cntrY + ((obj.vtx1.z - obj.L/300 + 1)*(obj.vtx1.y - cntrX));*/
}

//this is used to log the key entered 
function keyCheck(e)
{
    if(e.keyCode==38)
    { keyPressed = 0;}
    else if(e.keyCode==37)
    { keyPressed = -1;}
    else if(e.keyCode==39)
    { keyPressed = 1;}
    else if(e.keyCode==40)
    { keyPressed = 2;}
    else if(e.keyCode==32)
    { gameOn = !gameOn;}
    else
    { //do quirky
    }
}

//drawing rectangles
function drawRect(obj)
{
    ctx.fillStyle = 'turquoise';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black"
    ctx.fillRect(cntrX-1,cntrY-1,2,2);
    ctx.fillStyle = 'red' ;
    ctx.fillRect(obj.printV1.x, obj.printV1.y, obj.L ,obj.L);
    ctx.fillStyle = 'blue' ;
    ctx.fillRect( obj.printV2.x, obj.printV2.y ,obj.L , obj.L);
}

//used to convert 3D points to 2D 
// I don't understand why this function does not work?
function flat(x,y,z)
{
    obj = new vtx(0,0,0);
    obj.x = this.x;
    obj.y = this.y;
    obj.z = this.z;
    obj.x = cntrX + ((obj.z + 1)*(obj.x - cntrX));
    obj.y = cntrY + ((obj.z + 1)*(obj.y - cntrX));
    return obj;
}