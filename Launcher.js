class Launcher
{
    constructor(A,B)
    {
        var options =
        {
            bodyA : A,
            pointB : B,
            stiffness : 0.004,
            length : 1
        }
        this.bodyA = A;
        this.pointB = B;
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
    }
    fly()
    {
        this.launcher.bodyA = null;
    }
    attach(A)
    {
        this.launcher.bodyA = A;
    }
    display()
    {
        if(this.launcher.bodyA)
        {
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(2);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}