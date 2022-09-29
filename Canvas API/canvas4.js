const canvasFor = document.querySelector("canvas4");
const ctx4 = canvas4.getContext("2d");
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const colorValue = Array.from(document.getElementsByClassName("color-option")); 

const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraseBtn = document.getElementById("eraser-btn");
const fileAdd = document.getElementById("files");
const fileTitle = document.getElementById("textTitle");
const saveBtn = document.getElementById("save");

const CANBAS_WIDTH = 800;
const CANDBAS_HEIGHT = 800;
canvas4.width = CANBAS_WIDTH;
canvas4.height = CANDBAS_HEIGHT;
let isPainting = false;
let isFilling = false;

ctx4.lineWidth = 2;
ctx4.lineWidth = lineWidth.value;

function onMove(event){
    if(isPainting){
        ctx4.lineTo(event.offsetX, event.offsetY);
        ctx4.stroke();
        return;
    }
    ctx4.moveTo(event.offsetX, event.offsetY);
}

function onMouseDown(event){
    isPainting = true;
}

function onMouseUp(event){
    isPainting = false;
    ctx4.beginPath();
}

function onLineWidthChange(event){
    ctx4.lineWidth = event.target.value;
}

function onColorChange(event){
    ctx4.strokeStyle = event.target.value;
    ctx4.fillStyle = event.target.value;
}

function onColorOptionChange(event){
    const colorChoice = event.target.dataset.color;
    ctx4.strokeStyle = colorChoice;
    ctx4.fillStyle = colorChoice;
    //color. value => 다시 넣는 이유?
    color.value = colorChoice;
}

function modeChange(){
    if(isFilling){
        isFilling = false;
        modeBtn.innerText = "Fill";
    } else{
        isFilling = true;
        modeBtn.innerText = "Draw";
    }
}

function onCanvasClick(){
    if(isFilling){
        ctx4.fillRect(0, 0, CANBAS_WIDTH, CANDBAS_HEIGHT);
    }
}

function onDestroyClick(){
    ctx4.fillStyle="pink";
    ctx4.fillRect(0, 0, CANBAS_WIDTH, CANDBAS_HEIGHT);
}

function onEraserClick(){
    ctx4.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Fill";
}

function onFileChange(event){
    const File = event.target.files[0];
    const url = URL.createObjectURL(File);
    const image = new Image();

    image.src = image;
    image.upload = function(){
        ctx4.drawImage(image, 0, 0, CANBAS_WIDTH, CANDBAS_HEIGHT);
        fileInput.value = null;
    }
}

function onDoubleClick(event){
    const text = textTitle.value;
    if ( text !== ""){
        ctx4.save();
        ctx4.lineWidth = 1;
        ctx4.font = "68px sans-serif";
        ctx4.fillText(text, event.offsetX, event.offsetY);
        ctx4.restore();
    }
}

function onSaveClick(){
    const url = canvas.toDataURL();
    const newFile = document.createElement("newFile");

    newFile.href = url;
    newFile.download = "MyImage.jpg";
    newFile.click();

}

canvas4.addEventListener("mousemove", onMove);
canvas4.addEventListener("mousedown", onMouseDown);
canvas4.addEventListener("mouseup", onMouseUp);
canvas4.addEventListener("mouseleave", onMouseUp);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener('change', onColorChange);
color.addEventListener('change', onColorChange);
colorValue.forEach((color) => color.addEventListener('click', onColorOptionChange));
modeBtn.addEventListener('click', modeChange);
destroyBtn.addEventListener('click', onDestroyClick);
eraseBtn.addEventListener('click', onEraserClick);
fileAdd.addEventListener('change', onFileChange);
saveBtn.addEventListener('click', onSaveClick);

