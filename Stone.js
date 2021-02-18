class Stone
{
    constructor(x,y,r)
    {
        var options=
        {
            isStatic : false,
            restitution : 0.5,
            friction : 1.2,
            density : 1.5
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image=loadImage("stone.png");
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }
    display()
    {
        var spos=this.body.position;
        push();
        translate(spos.x,spos.y);
        fill(255);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}