function setup() {
    canvas=createCanvas(650,650);
    canvas.position(900,100);
video=createCapture(VIDEO);
video.position(200,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
difference=0;
    
function draw() {
    background("#8fdfd6");
    fill("#ee95a4");
    stroke("#ee95a4");
    square(nosex,nosey,difference);
    document.getElementById("size").innerHTML="square size is"+difference+"px";

}

function modelLoaded() {
   console.log("model has loaded"); 
}
function gotPoses(results) {
  if(results.length>0)  {
      console.log(results);
      nosex=results[0].pose.nose.x;
      nosey=results[0].pose.nose.y;
      leftwristx=results[0].pose.leftWrist.x;
      rightwristx=results[0].pose.rightWrist.x;
      difference=floor(leftwristx-rightwristx);
      console.log("leftwristx="+leftwristx+"rightwristx="+rightwristx+"difference="+difference);
  }
}
