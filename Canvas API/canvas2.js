const canvasTwo = document.querySelector("canvas2");
const contxt = canvas2.getContext("2d");
canvas2.width = 800;
canvas2.height = 800;

contxt.fillStyle="coral";
contxt.fillRect(200, 500, 50, 200);
contxt.fillRect(400, 500, 50, 200);
contxt.fillRect(300, 600, 50, 100);
contxt.fillRect(200, 700, 250, 10);
contxt.fillRect(200, 500, 250, 20);
contxt.moveTo(200,500);
contxt.lineTo(325,300);
contxt.lineTo(450,500);
contxt.fill();

contxt.beginPath();
contxt.fillStyle="#000";
contxt.fillRect(550, 600, 15, 100);
contxt.fillRect(700, 600, 15, 100);
contxt.fillRect(600, 600, 60, 150);
contxt.arc(630, 570, 50, 0, 2*Math.PI);
contxt.fill();

//eye
contxt.beginPath();
contxt.fillStyle="#fff";
contxt.arc(610, 560, 7, 0, 2*Math.PI);
contxt.arc(645, 560, 7, 0, 2*Math.PI);
contxt.fill();
