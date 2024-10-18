class Ant {
  constructor(bX, bY, r, moment) {
    // Instance variables
    this.x = bX;
    this.y = bY;
    this.away = dist(bX, bY, width / 2, height / 2);
    this.factorx = (width / 2 - bX) / (this.away / 4);
    this.factory = (height / 2 - bY) / (this.away / 4);
    this.dy = random(0.5, 1);
    this.move2_angle = -0.07;
    this.move3_angle = 0;
    this.angleAcc = random(0.009, 0.015);
    this.newx = this.x;
    this.newy = this.y;
    this.radius = r;
    this.birthcount = moment;
    this.lifespan = random(5000, 8500);
    this.tana = dist(this.x, this.y, this.x, height / 2) / dist(this.x, height / 2, width / 2, height / 2);
    this.transp = 255;

    if (bX < width / 2 && bY < height / 2) {
      this.move1_angle = atan(this.tana);
    } else if (bX < width / 2 && bY > height / 2) {
      let aX = abs(width / 2 - bX);
      let aY = abs(height / 2 - bY);
      this.move1_angle = atan2(aX, aY) + (3 * PI) / 2;
    } else if (bX > width / 2 && bY < height / 2) {
      let aX = abs(width / 2 - bX);
      let aY = abs(height / 2 - bY);
      this.move1_angle = atan2(aX, aY) + PI / 2;
    } else if (bX > width / 2 && bY > height / 2) {
      this.move1_angle = atan(this.tana) + PI;
    }
  }

  move_down() {
    this.show();
    this.x = this.x + this.factorx * this.dy;
    this.y = this.y + this.factory * this.dy;
    if (dist(this.x, this.y, width / 2, height / 2) <= this.radius) {
      this.dy = 0;
    }
  }

  show() {
    if (dist(this.x, this.y, width / 2, height / 2) > this.radius + 20) {
      push();
      translate(this.x, this.y);
      rotate(random(this.move1_angle - 0.1, this.move1_angle + 0.1));
      noStroke();
      fill(0);
      ellipse(3.75, 0, 3.5, 3);
      ellipse(0, 0, 4, 2);
      fill(150);
      ellipse(-4.5, 0, 5, 4);
      stroke(0);
      strokeWeight(0.5);
      line(0, -5, 0, 5);
      line(-4.75, 5, 4.75, -5);
      line(-4.75, -5, 4.75, 5);
      line(3.75, 0, 6.75, 2);
      line(3.75, 0, 6.75, -2);
      pop();
    } else if (dist(this.x, this.y, width / 2, height / 2) <= this.radius + 20 && dist(this.x, this.y, width / 2, height / 2) > this.radius) {
      push();
      translate(this.x, this.y);
      rotate(this.move1_angle + this.move2_angle);
      noStroke();
      fill(0);
      ellipse(3.75, 0, 3.5, 3);
      ellipse(0, 0, 4, 2);
      fill(110, 49, 14);
      ellipse(-4.5, 0, 5, 4);
      stroke(0);
      strokeWeight(0.5);
      line(0, -5, 0, 5);
      line(-4.75, 5, 4.75, -5);
      line(-4.75, -5, 4.75, 5);
      line(3.75, 0, 6.75, 2);
      line(3.75, 0, 6.75, -2);
      this.move2_angle -= 0.05;
      pop();
    } else if (dist(this.x, this.y, width / 2, height / 2) <= this.radius) {
      this.newx = this.x - width / 2;
      this.newy = this.y - height / 2;
      push();
      translate(width / 2, height / 2);
      rotate(this.move3_angle);
      push();
      translate(this.newx, this.newy);
      if (frameCount < this.birthcount + this.lifespan + 250) {
        rotate(random(this.move1_angle - PI / 2 - 0.01, this.move1_angle - PI / 2 + 0.01));
      } else {
        rotate(this.move1_angle - PI / 2);
      }
      if (frameCount < this.birthcount + this.lifespan) {
        fill(181, 54, 22);
        ellipse(-4.5, 0, 5, 4);
      } else if (frameCount >= this.birthcount + this.lifespan && frameCount <= this.birthcount + this.lifespan + 3800) {
        fill(0);
        ellipse(-4.5, 0, 5, 4);
      } else if (frameCount >= this.birthcount + this.lifespan + 3800) {
        fill(0, this.transp);
        ellipse(-4.5, 0, 5, 4);
        ellipse(3.75, 0, 3.5, 3);
        ellipse(0, 0, 4, 2);
        stroke(0, this.transp);
        strokeWeight(0.5);
        line(0, -5, 0, 5);
        line(-4.75, 5, 4.75, -5);
        line(-4.75, -5, 4.75, 5);
        line(3.75, 0, 6.75, 2);
        line(3.75, 0, 6.75, -2);
        if (this.transp > 0) {
          this.transp -= 0.5;
        }
      }
      if (frameCount <= this.birthcount + this.lifespan + 3800) {
        noStroke();
        fill(0);
        ellipse(3.75, 0, 3.5, 3);
        ellipse(0, 0, 4, 2);
        stroke(0);
        strokeWeight(0.5);
        line(0, -5, 0, 5);
        line(-4.75, 5, 4.75, -5);
        line(-4.75, -5, 4.75, 5);
        line(3.75, 0, 6.75, 2);
        line(3.75, 0, 6.75, -2);
      }
      if (frameCount < this.birthcount + this.lifespan) {
        this.newx += 0.001;
        this.newy += 0.001;
      }
      pop();
      this.move3_angle += this.angleAcc;
      if (frameCount >= this.birthcount + this.lifespan) {
        this.angleAcc = 0;
      }
      pop();
    }
  }
}