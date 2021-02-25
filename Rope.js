class Rope{
    constructor(body1, body2, offsetX, offsetY)
     {
    
  this.offsetX=offsetX,
  this.offsety=offsetY

  var options={
        bodyA:body1
        bodyB:body2
        pointB:{x=this.offsetX, this.offsetY}

  }

//console.log(options);
this.rope=Constraint.create(options)
World.add(world, this.rope)



     }


        fly(){
            this.sling.bodyA=null;
        }

     this.chain=Constraint.create(options)
    World .add(world,this.Rope)}
    display(){
        if (this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
    
    }
    }