class Tree
{
    constructor(x,y)
    {
        this.image = loadImage("tree.png");
        this.x = x;
        this.y = y;
        this.width = 450;
        this.height = 600;
    }
    display()
    {
        push();
        translate(this.x,this.y);
        imageMode(CENTER);
        image(this.image,0,-this.height/2,this.width,this.height);
        pop();
    }
}