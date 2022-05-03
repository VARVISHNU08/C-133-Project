cocoSsdStatus = "";

function preload(){
    img = loadImage('Phone.jpg');
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);

    document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelLoaded(){
    cocoSsdStatus = true;

    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}

function draw(){
    image(img, 0, 0, 640, 480);
}