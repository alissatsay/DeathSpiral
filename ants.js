let baseWidth = 1920;  // Base width (the reference size in your original code)
let baseHeight = 1080; // Base height

let widthScale, heightScale;
let animationStarted = false; // Flag to control animation start
let button;

let beat, buzz;
let ants = [];
let lights = [];
let alength = 2000;
let radius = 60;
let r = 209;
let g = 119;
let b = 23;
let lightR = 205;
let range = 7000;
let rangeY;
let minR = 0;
let maxR = 5;
let startFrame = 0;
let transparency = 255;
let green = 232;
let blue = 168;

// function preload() {
//   soundFormats('wav');
//   beat = loadSound('beat_2.wav');
//   buzz = loadSound('buzz_good.wav');
// }

function setup() {
    createCanvas(windowWidth, windowHeight);
    rangeY = height / 2;

    // Create a button and position it in the center
    button = createButton('Start Animation');
    button.position(width / 2 - 50, height / 2);
    button.class('startButton');
    button.mousePressed(startAnimation);

    // Calculate scaling factors based on current window size
    widthScale = width / baseWidth;
    heightScale = height / baseHeight;

    // Ants
    for (let i = 0; i < alength; i++) {
        ants.push(new Ant(random(width, range + width), random(height / 2 - rangeY, height / 2 + rangeY), radius, frameCount));
        ants.push(new Ant(random(-range, 0), random(height / 2 - rangeY, height / 2 + rangeY), radius, frameCount));
        if (i % 5 == 0) {
            radius++;
        }
        range++;
        rangeY += 0.8;
    }

    // Lights
    for (let i = 0; i < 45; i++) {
        lights.push(new Light(maxR, minR, startFrame, transparency, green, blue));
        minR += 10;
        maxR += 10;
        startFrame += 200;
        if (i % 2 == 0) {
            green--;
            blue -= 3;
        }
        adjustTransparency(i);
    }

    //beat.loop(0.4);
    //beat.setVolume(0.3);
    //buzz.loop(0.5);
}

function startAnimation() {
    // Set flag to true and hide the button when clicked
    animationStarted = true;
    button.hide();
}

function adjustTransparency(i) {
    if (i == 1) transparency = 200;
    if (i == 2) transparency = 100;
    if (i == 3) transparency = 70;
    if (i > 3 && i < 8) transparency = 40;
    if (i > 8 && i < 15) transparency = 20;
    if (i > 15 && i < 25) transparency = 10;
    if (i > 25 && i < 45) transparency = 5;
}

function mousePressed() {
    // Calculate the distance from the mouse position to the center of the screen
    let distance = dist(mouseX, mouseY, width / 2, height / 2);

    // Add the ant only if the mouse is more than 50px away from the center
    if (animationStarted && distance > 50) {
        ants.push(new Ant(mouseX, mouseY, 200, 200));
    }
}

function draw() {
    background(0);
    
    if (!animationStarted) {
      // Show an initial message when animation hasn't started
      fill(255);
      textAlign(CENTER);
      textSize(19);
      text("The Death Spiral Animation is an interactive, web-based project that", width / 2, height / 2 - 170);
      text("simulates ants forming a death spiral around a light source.", width / 2, height / 2 - 140);
      fill(0, 255, 0);
      text("You can add new ants to the swarm by clicking on the screen.", width / 2, height / 2 - 85);
    } else {
      // Animation starts after button is pressed
      print(frameCount + " ");
      
      // Draw circles
      for (let i = 30; i > 0; i--) {
        noStroke();
        fill(r, g, b, 20);
        ellipseMode(CENTER);
        circle(width / 2, height / 2, (height / 20) * i);
      }
  
      // Move ants
      for (let a of ants) {
        a.move_down();
      }
  
      // Show lights
      for (let l of lights) {
        l.show();
      }
  
    // Stop sounds after frame 9100
    //   if (frameCount >= 9100) {
    //     beat.stop();
    //     buzz.stop();
    //   }
    }
  }