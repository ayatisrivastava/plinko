class Particle{
    constructor(x,y,radius){
        var options ={
            restitutions = 0.04
        }
        this.radius = radius;
        this.body = Bodies.circle(x,y,this.radius,options);
        this.colour = colour(random(0,255), random(0,255) random(0,255));
        World.add(world, this.body);
    }
    display({
       var pos = this.body.position;
       var angle = this.body.angle;
       
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       noStroke();
       fill(this.colour);
       ellipseMode(RADIUS);
       ellipse(0,0,this.radius,this.radius);
       pop();
    }
}