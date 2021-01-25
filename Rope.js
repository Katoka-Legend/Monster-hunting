class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB = pointB
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
    }

    display(){
        if(this.Rope.bodyA){
            var pointA = this.Rope.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(255,255,255)
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    
    
}