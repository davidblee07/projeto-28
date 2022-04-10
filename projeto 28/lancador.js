class Lancador{
 constructor(bodyA, pointB){
   var options = {
     bodyA: bodyA,
     pointB: pointB,
      stiffness: 0.04,
      length: 10
     }
        this.pointB = pointB; 
        this.lanc = Constraint.create(options);
        World.add(world, this.lanc);
    }

    fly(){
        this.lanc.bodyA = null;
    }

    attach(body){
        this.lanc.bodyA = body; 
      }

    display(){
     if(this.lanc.bodyA){
     var pointA = this.lanc.bodyA.position;
     var pointB = this.pointB;
     strokeWeight(4);
     line(pointA.x, pointA.y, pointB.x, pointB.y);

   } 
 } 
}