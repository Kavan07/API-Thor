class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("hammer.png");
  }

  display() {
    super.display();
  }
}
