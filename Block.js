class Block{
  constructor(x, y, width, height, angle) {
      var options = {
        restitution : 0.7,
        friction : 0.6,
        isStatic : false,
        
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visibility =255;
    }
    display(){

      

      var angle = this.body.angle;
      var any = random(100,255)
     
      if(this.body.speed<3){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill(any);
        rect(0, 0, this.width, this.height);
        pop();

      }
      else{
World.remove(world,this.body)
this.visibility = this.visibility -1
tint(255,this.body.visibility)

      }
    }

      score(){
        if (this.visibility < 0 && this.visibility >- 105){
          score++;
        }
    }
}
