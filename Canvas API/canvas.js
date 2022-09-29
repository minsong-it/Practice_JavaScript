const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); 
canvas.width = 800;
canvas.height = 800;

ctx.rect(50,50,100,100);
ctx.rect(150,150,100,100);
ctx.rect(250,250,100,100);
ctx.rect(350,350,100,100);
ctx.fillStyle="skyblue";
ctx.fill();

ctx.beginPath();
ctx.rect(450,450,100,100);
ctx.rect(550,550,100,100);
ctx.rect(650,650,100,100);
ctx.fillStyle="yellowgreen";
ctx.fill();

ctx.beginPath();
ctx.moveTo(750, 50);
ctx.lineTo(650, 50);
ctx.lineTo(650, 150);
ctx.lineTo(750, 150);
ctx.lineTo(750, 50);
ctx.stroke();
