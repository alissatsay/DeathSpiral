class Ant{
  float bX;
  float bY;
  float x;
  float y;
  float factorx;
  float factory;
  float dy;
  float move1_angle;
  float move2_angle;
  float move3_angle;
  float angleAcc;
  float newx;
  float newy;
  float radius;
  float away;
  float birthcount;
  float lifespan;
  float moment;
  float tana;
  float transp;
  
  Ant(float bX, float bY,float r,float moment){
    //Instance vars
    x = bX;
    y = bY;
    away = dist(bX,bY,width/2,height/2);
    factorx = (width/2 - bX)/(away/4);
    factory = (height/2 - bY)/(away/4);
    dy = random(0.5,1);
    move2_angle = -0.07;
    move3_angle = 0;
    angleAcc = random(0.009,0.015);
    newx = x;
    newy = y;
    radius = r;
    birthcount = moment;
    lifespan = random(5000,8500);
    tana = dist(x,y,x,height/2)/dist(x,height/2,width/2,height/2);
    transp = 255;
    if (bX < width/2 && bY < height/2){
      move1_angle = atan(tana);
    }
    else if (bX < width/2 && bY > height/2){
      float aX = abs(width/2-bX);
      float aY = abs(height/2-bY);
      move1_angle = atan2(aX,aY) + (3*PI)/2;
    }
    else if (bX > width/2 && bY < height/2){
      float aX = abs(width/2-bX);
      float aY = abs(height/2-bY);
      move1_angle = atan2(aX,aY) + PI/2;
    }
    else if (bX > width/2 && bY > height/2){
      move1_angle = atan(tana) + PI;
    }
    
  }
 
  void move_down(){
    show();
    x = x + factorx*dy;
    y = y + factory*dy;
    if (dist(x,y, width/2,height/2) <= radius){
      dy = 0;
    }
  }
  void show(){
    if (dist(x,y, width/2,height/2) > (radius + 20)){
      push();
        translate(x,y);
        rotate(random(move1_angle-0.1,move1_angle+0.1));
        noStroke();
        fill(0);
        ellipse(3.75,0,3.5,3);
        ellipse(0,0,4,2);
        fill(150);
        ellipse(-4.5,0,5,4);
        stroke(0);
        strokeWeight(0.5);
        line(0,-5,0,5);
        line(-4.75,5, 4.75,-5);
        line(-4.75,-5, 4.75,5);
        line(3.75,0,6.75,2);
        line(3.75,0,6.75,-2);
      pop();
    }
    else if (dist(x,y, width/2,height/2) <= (radius + 20) && dist(x,y, width/2,height/2) > radius){
      push();
        translate(x,y);
        rotate(move1_angle + move2_angle);
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
        move2_angle -= 0.05;
      pop();
    }
    else if (dist(x,y, width/2,height/2) <= radius){
      newx = x - width/2;
      newy = y - height/2;
      push();
        translate(width/2,height/2);
        rotate(move3_angle);
        push();
          translate(newx,newy);
          if (frameCount < birthcount + lifespan+250){
            rotate(random(move1_angle-PI/2-0.01,move1_angle-PI/2+0.01));
          }
          else{
            rotate(move1_angle-PI/2);
          }
          if (frameCount < birthcount + lifespan){
            fill(181, 54, 22);
            ellipse(-4.5,0,5,4);
          }
          else if (frameCount >= birthcount + lifespan && frameCount <= birthcount + lifespan + 3800){
            fill(0);
            ellipse(-4.5,0,5,4);
          }
          else if (frameCount >= birthcount + lifespan + 3800){
            fill(0,transp);
            ellipse(-4.5,0,5,4);
            ellipse(3.75,0,3.5,3);
            ellipse(0,0,4,2);
            stroke(0,transp);
            strokeWeight(0.5);
            line(0,-5,0,5);
            line(-4.75,5, 4.75,-5);
            line(-4.75,-5, 4.75,5);
            line(3.75,0,6.75,2);
            line(3.75,0,6.75,-2);
            if (transp > 0){
              transp -=0.5;
            }
          }
          if (frameCount <= birthcount + lifespan + 3800){
            noStroke();
            fill(0);
            ellipse(3.75,0,3.5,3);
            ellipse(0,0,4,2);
            stroke(0);
            strokeWeight(0.5);
            line(0,-5,0,5);
            line(-4.75,5, 4.75,-5);
            line(-4.75,-5, 4.75,5);
            line(3.75,0,6.75,2);
            line(3.75,0,6.75,-2);
          }
          if (frameCount < birthcount + lifespan){
            newx += 0.001;
            newy += 0.001;
          }
        pop();
        move3_angle += angleAcc;
        if (frameCount >= birthcount + lifespan){
            angleAcc = 0;
          }
      pop();
    }
  }
}
