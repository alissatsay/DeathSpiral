class Ant_circ {
  float x = 0; //nums[0];
  float y = random(-200,-30); //
  float angle = random(0,2*PI);
  float radius = dist(x,y,300,300);
  float angleO = 0.0;
  float angleAcc = random(0.01,0.015);
  float angleXY = 0.01;

void show(){
  push();
    translate(400,400);
    rotate(angle);
    push();
      translate(x,y);
      //rotate(angleO);
      noStroke();
      fill(0);
      //////
      ellipse(3.75,0,3.5,3);
      ellipse(0,0,4,2);
      fill(110, 49, 14);
      ellipse(-4.5,0,5,4);
      stroke(0);
      strokeWeight(0.5);
      line(0,-5,0,5);
      line(-4.75,5, 4.75,-5);
      line(-4.75,-5, 4.75,5);
      line(3.75,0,6.75,2);
      line(3.75,0,6.75,-2);
      x += 0.001;
      y += 0.001;
      //angleO += 0.00000;
    pop();
    angle += angleAcc;
  pop();
}

void walk_around(float x,float y){
    translate(x,y);
    rotate(angleXY);
      ellipse(3.75,0,3.5,3);
      ellipse(0,0,4,2);
      fill(110, 49, 14);
      ellipse(-4.5,0,5,4);
      stroke(0);
      strokeWeight(0.5);
      line(0,-5,0,5);
      line(-4.75,5, 4.75,-5);
      line(-4.75,-5, 4.75,5);
      line(3.75,0,6.75,2);
      line(3.75,0,6.75,-2);
    angleXY += 0.01;
}
}
