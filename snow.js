class Snow extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("sprites/snow1.jpg");
      this.image = loadImage("sprites/snow2.jpg");
      this.image = loadImage("sprites/snow3.jpg");
      this.image = loadImage("sprites/snow4.webp");
      this.image = loadImage("sprites/snow5.webp");
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
  
      super.display();
    }
}