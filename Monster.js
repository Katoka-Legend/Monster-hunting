class Monster {
    constructor(x,y,r) {
      var options = {
          isStatic: false
          
      }
      this.body = Bodies.circle(x,y,r,options);
      this.radius = r
      this.image = loadImage('images/MOnster-01.png');
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      this.image.resize(250,200)
      pop();
      }
  };
