img="";
status = "";

function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function preload(){
 img=loadImage('water.jpg');
}

function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function draw() {
    image(img, 0, 0,640, 420);
    
}

function gotResult(error,results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}