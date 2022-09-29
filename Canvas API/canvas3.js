const canvasThr = document.querySelector("canvas3");
const ctx2 = canvas3.getContext("2d");
canvas3.width = 800;
canvas3.height = 800;
const colors = [
   "#87ceeb",
   "#808080",
   "#4b0082"
]

ctx2.lineWidth = 3;

function onClick(event){
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx2.beginPath();
    ctx2.moveTo(200,200);
    ctx2.strokeStyle = color;
    ctx2.lineTo(event.offsetX, event.offsetY);
    ctx2.stroke();
}

canvas3.addEventListener("mousemove", onClick);
