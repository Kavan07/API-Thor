class Log extends BaseClass {
  constructor(x, y){
    super(x,y,18,18);
    this.image = loadImage("wood2.png");
    this.Visibility = 255;
  }

  display() {
    if(this.body.speed < 2) {
      super.display();
    }
    else {
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 50;
      tint(255, this.Visibility);
      image(this.image, this.body.position.x, this.body.position.y, 18, 18);
      pop();
    }
  }
}