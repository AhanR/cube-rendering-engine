function drawRect(obj)
{
  ctx.lineWidth = 1;
  ctx.lineCap = "round";
  ctx.strokeStyle = 'white'
  //cube
  {
    ctx.beginPath();
    ctx.moveTo(obj.printV1.x, obj.printV1.y);
    ctx.lineTo(obj.printV2.x, obj.printV2.y);
    ctx.lineTo(obj.printV3.x, obj.printV3.y);
    ctx.lineTo(obj.printV4.x, obj.printV4.y);
    ctx.lineTo(obj.printV1.x, obj.printV1.y);
    ctx.lineTo(obj.printV5.x, obj.printV5.y);
    ctx.lineTo(obj.printV6.x, obj.printV6.y);
    ctx.lineTo(obj.printV7.x, obj.printV7.y);
    ctx.lineTo(obj.printV8.x, obj.printV8.y);
    ctx.lineTo(obj.printV5.x, obj.printV5.y);
    ctx.moveTo(obj.printV6.x, obj.printV6.y);
    ctx.lineTo(obj.printV2.x, obj.printV2.y);
    ctx.moveTo(obj.printV3.x, obj.printV3.y);
    ctx.lineTo(obj.printV7.x, obj.printV7.y);
    ctx.moveTo(obj.printV4.x, obj.printV4.y);
    ctx.lineTo(obj.printV8.x, obj.printV8.y);
    ctx.closePath();
    ctx.stroke();
  }
}

function drawStatics(obj)
{
  //background
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white"
  ctx.fillRect(cntrX-2,cntrY-2,4,4);
}