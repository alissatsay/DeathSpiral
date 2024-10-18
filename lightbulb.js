class Light {
    constructor(uRad, lRad, start, t, green, blue) {
      this.upperR = uRad;
      this.lowerR = lRad;
      this.lightColor = color(255, green, blue);
      this.start = start;
      this.transp = t;
    }
  
    show() {
      if (frameCount >= this.start && frameCount < 8500) {
        fill(255, green, blue, this.transp);
        circle(width / 2, height / 2, random(this.lowerR, this.upperR));
      } else if (frameCount >= 8500 && frameCount < 8550) {
        this.lowerR += 20;
        this.upperR += 20;
        fill(255, green, blue, this.transp);
        circle(width / 2, height / 2, random(this.lowerR, this.upperR));
      } else if (frameCount >= 8550 && this.transp !== 0) {
        this.transp -= this.transp / 40;
        fill(255, green, blue, this.transp);
        circle(width / 2, height / 2, random(this.lowerR, this.upperR));
      }
    }
  }