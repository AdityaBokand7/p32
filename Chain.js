class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }

       
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);

        
    }
   
    attach(body){
        this.chain.bodyA = body;
    }
    fly(){
        this.chain.bodyA = null;
    }
    display(){

       if(this.chain.bodyA){
        var pos = this.chain.bodyA.position
        var pointB = this.pointB;
        strokeWeight(4)
        stroke("cyan")
        line(pos.x,pos.y,pointB.x,pointB.y)
       }

       
    }
}