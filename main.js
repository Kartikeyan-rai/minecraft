canvas=new fabric.Canvas("myCanvas");
player_y=10;
player_x=10;
block_width=30;
block_height=30;
var player_object="";
var block_object="";
function player_update()
{fabric.Image.fromURL("player.png",function(Img)
{player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(150);
player_object.set({top:player_y,left:player_x});
canvas.add(player_object);
}
)}
function block_update(getimage)
{fabric.Image.fromURL(getimage,function(Img)
{block_object=Img;
block_object.scaleToWidth(block_width);
block_object.scaleToHeight(block_height);
block_object.set({top:player_y,left:player_x});
canvas.add(block_object);
}
)}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{var keypress=e.keyCode;
if(e.shiftKey ==true && keypress=='80')
{block_width=block_width+10;
block_height=block_height+10;
document.getElementById("current_width").innerHTML=block_width;
document.getElementById("current_height").innerHTML=block_height;
}
if(e.shiftKey ==true && keypress=='77')
{block_width=block_width-10;
block_height=block_height-10;
document.getElementById("current_width").innerHTML=block_width;
document.getElementById("current_height").innerHTML=block_height;
}
if(keypress=='38')
{console.log("Up Pressed");
up();
}
if(keypress=='40')
{console.log("down Pressed");
down();
}if(keypress=='37')
{console.log("left Pressed");
left();
}if(keypress=='39')
{console.log("right Pressed");
right();
}
if(keypress=='87')
{block_update('wall.jpg');}
if(keypress=='71')
{block_update('ground.png');}
if(keypress=='76')
{block_update('light_green.png');}
if(keypress=='84')
{block_update('trunk.jpg');}
if(keypress=='82')
{block_update('roof.jpg');}
if(keypress=='89')
{block_update('yellow_wall.png');}
if(keypress=='68')
{block_update('dark_green.png');}
if(keypress=='85')
{block_update('unique.png');}
if(keypress=='67')
{block_update('cloud.jpg');}}
function up()
{if(player_y>=0){
    player_y=player_y-block_height;
canvas.remove(player_object);
player_update()
}}
function down()
{if(player_y<=500){
    player_y=player_y+block_height;
canvas.remove(player_object);
player_update()
}}
function left()
{if(player_x>=0){
    player_x=player_x-block_height;
canvas.remove(player_object);
player_update()
}}
function right()
{if(player_x<=900){
    player_x=player_x+block_height;
canvas.remove(player_object);
player_update()
}}