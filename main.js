song1 = "";
song2 = "";
left_wrist_x =  0;
left_wrist_y =  0;
right_wrist_x = 0;
right_wrist_y = 0;
scoreRightWrist = 0;
scoreLeftWrist = 0;

function loadSound() {

}

function preload() {
song1 = loadSound("music.mp3");
song2 = loadSound("music2.mp3");
}



function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
   
    
    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Intitialized');
}



function draw() {
    image(video, 0, 0, 600, 500);
    fill("#000000");
    fill("black");
    stroke("black");
    rect(680, 0, 20, 700);
    console.log(scoreRightWrist);
    if (scoreRightWrist > 0.2) {
      fill("red");
      stroke("red");
      circle(right_wrist_X, right_wrist_Y, 30);
    }
      fill("black");
      stroke("black");
      rect(0, 0, 20, 700);
  
  
  
  
}

function gotPoses(results) {
    if(results.length > 0)
    {
        scoreRightWrist =  results[0].pose.keypoints[10].score;
        scoreLeftWrist =  results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);

     console.log(results);
     left_wrist_x = results[0].pose.left_wrist.x;
     left_wristy = results[0].pose.left_wrist.y;
     console.log("left_wristx =" + left_wristx +"left_wrist_y =" + leftWrist_y);

     rightWristX = results[0].pose.rightWrist.x;
     rightWristY = results[0].pose.rightWrist.y;
     console.log("right_wrist_x ="+ right_wrist_x +"right_wrist_y =" + right_wrist_y);
    }
}