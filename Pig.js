class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility=255;
  }
display(){
  //super.display();
  
  console.log(this.body.speed);
  if(this.body.speed>6){
    World.remove(world,this.body);
    push();
    this.visibility=this.visibility-10;
    tint(255,this.visibility)
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    pop();
  }
  else{
    super.display();
  }
}
};