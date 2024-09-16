import processing.sound.*;
SoundFile beat;
SoundFile buzz;

ArrayList<Ant> ants;
ArrayList<Light> lights;
int alength = 2000;
float radius = 60;
int r = 209;
int g = 119;
int b = 23;
int lightR = 205;
float range = 7000;
float rangeY = height/2;
float minR = 0;
float maxR = 5;
int startFrame = 0;
float transparency = 255;
int green = 232;
int blue = 168;

void setup(){
  size(1920,1080);
  //Ants
  ants = new ArrayList<Ant>();
  
  for (int i=0; i < alength; i++){
    ants.add(new Ant(random(width,range+width),random(height/2-rangeY,height/2+rangeY),radius,frameCount));
    ants.add(new Ant(random(-range,0),random(height/2-rangeY,height/2+rangeY),radius,frameCount));
    if (i%5 == 0){
      radius ++;
    }
    range++;
    rangeY+=0.8;
  }
  
  //Lights
  lights = new ArrayList<Light>();
  
  for (int i=0; i < 45; i++){
    lights.add(new Light(maxR, minR, startFrame, transparency, green, blue));
    minR += 10;
    maxR += 10;
    startFrame += 200;
    if (i%2 == 0){
      green --;
      blue-=3;
    }
    if (i == 1){
      transparency = 200;
    }
    if (i == 2){
      transparency = 100;
    }
    if (i == 3){
      transparency = 70;
    }
    if (i > 3 && i < 8){
      transparency = 40;
    }
    if (i > 8 && i < 15){
      transparency = 20;
    }
    if (i > 15 && i < 25){
      transparency = 10;
    }
    if (i > 25 && i < 45){
      transparency = 5;
    }
  }
  
  // Loading audio
  beat = new SoundFile(this, "beat_2.wav");
  beat.loop(0.4);
  beat.amp(.3);
  buzz = new SoundFile(this, "buzz_good.wav");
  buzz.loop(0.5);
}

void mousePressed(){
  ants.add(new Ant(mouseX,mouseY,200,200));
}

void draw(){
  print(frameCount + " ");
  background(0);
  for (int i = 30; i > 0; i--){
    noStroke();
    fill(r,g,b,20);
    ellipseMode(CENTER);
    circle(width/2,height/2,height/20*i); //65,40
  }
  for (Ant a : ants){
    a.move_down();
  }
  
  for (Light l : lights){
    l.show();
  }
  if (frameCount >= 9100){
    beat.stop();
    buzz.stop();
  }
  //saveFrame("frames/ant-######.tif");
}
