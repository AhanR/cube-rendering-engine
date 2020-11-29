//the cube is drawn, but the cube cannot be moved
// check the main file to see what went wrong
// also modify the drawing to incude making 8 lines not 4 squares
function drawR(obj)
{
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white"
  ctx.fillRect(cntrX-2,cntrY-2,4,4);
  ctx.lineWidth = 2;
  ctx.lineCap = "round";

  ctx.strokeStyle = 'white'
  //upper side
  ctx.beginPath();
  ctx.moveTo(obj.printV1.x , obj.printV1.y);
  ctx.lineTo(obj.printV2.x, obj.printV2.y);
  ctx.lineTo(obj.printV3.x, obj.printV3.y);
  ctx.lineTo(obj.printV4.x, obj.printV4.y);
  ctx.lineTo(obj.printV1.x, obj.printV1.y);
  ctx.closePath();
  ctx.stroke();

  //lower side
  ctx.beginPath();
  ctx.moveTo(obj.printV5.x , obj.printV5.y);
  ctx.lineTo(obj.printV6.x, obj.printV6.y);
  ctx.lineTo(obj.printV7.x, obj.printV7.y);
  ctx.lineTo(obj.printV8.x, obj.printV8.y);
  ctx.lineTo(obj.printV5.x, obj.printV5.y);
  ctx.closePath();
  ctx.stroke();

  //back square
  ctx.beginPath();
  ctx.moveTo(obj.printV7.x, obj.printV7.y);
  ctx.lineTo(obj.printV6.x , obj.printV6.y);
  ctx.lineTo(obj.printV2.x, obj.printV2.y);
  ctx.lineTo(obj.printV3.x, obj.printV3.y);
  ctx.closePath();
  ctx.stroke();

  //right side
  ctx.beginPath();
  ctx.moveTo(obj.printV7.x, obj.printV7.y);
  ctx.lineTo(obj.printV8.x , obj.printV8.y);
  ctx.lineTo(obj.printV4.x, obj.printV4.y);
  ctx.lineTo(obj.printV3.x, obj.printV3.y);
  ctx.closePath();
  ctx.stroke();

  //left side
  ctx.beginPath();
  ctx.moveTo(obj.printV1.x, obj.printV1.y);
  ctx.lineTo(obj.printV2.x , obj.printV2.y);
  ctx.lineTo(obj.printV6.x, obj.printV6.y);
  ctx.lineTo(obj.printV5.x, obj.printV5.y);
  ctx.closePath();
  ctx.stroke();
}