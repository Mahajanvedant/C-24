class Bird{
    constructor(x,y){
        var options={restitution:0.8,friction:0.3,density:1.0
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        World.add(myWorld,this.body);
        }
        display(){
        var angle=this.body.angle;
        this.body.position.x=mouseX;
        this.body.position.y=mouseY;
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate (angle)
        rectMode(CENTER)
        strokeWeight(5);
        stroke("yellow");
        fill ("blue");
        rect(0,0,this.width,this.height)
        pop();
        }
}