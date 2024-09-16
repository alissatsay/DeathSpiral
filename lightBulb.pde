class Light{
  float upperR;
  float lowerR;
  color lightColor;
  int start;
  float transp;
  
  Light(float uRad, float lRad, int start, float t, int green, int blue){
    this.upperR = uRad;
    this.lowerR = lRad;
    this.lightColor = color(255, green, blue);
    this.start = start;
    this.transp = t;
  }
  
  void show(){
    if (frameCount >= start && frameCount < 8500){
      fill(lightColor,transp);
      circle(width/2, height/2, random(lowerR, upperR));
    }
    else if (frameCount >= 8500 && frameCount < 8550){
      lowerR += 20;
      upperR += 20;
      fill(lightColor,transp);
      circle(width/2, height/2, random(lowerR, upperR));
    }
    else if (frameCount >= 8550 && transp != 0){
      transp -= transp/40;
      fill(lightColor,transp);
      circle(width/2, height/2, random(lowerR, upperR));
    }
  }
}
