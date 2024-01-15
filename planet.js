class PlanetClass
{
    constructor(x, y, d, type)
    {
        this.x = x;
        this.y = y;
        this.d = d;
        this.type = type;
        this.angle = random(0,360)
    }

    Show()
    {
        if(this.type == "1")
        {
            push();
            translate(this.x, this.y)
            rotate(this.angle)
            image(marsImg,0,0,this.d,this.d)
            this.x += 0.8;
            pop();
        }
        else if(this.type == "2")
        {
            push();
            translate(this.x, this.y)
            rotate(this.angle)
            image(jupiterImg,0,0,this.d,this.d)
            this.x += 0.1;
            pop();
        }
        else if(this.type == "3")
        {
            push();
            translate(this.x, this.y)
            rotate(this.angle)
            image(saturnImg,0,0,this.d,this.d)
            this.x += 0.3;
            pop();
        }
        else
        {
            fill(255,0,0)
            ellipse(this.x, this.y, this.d);
            this.x += 0.6;
            this.Bounds();
        }
    }

    Bounds()
    {
        if(this.x > width + 100)
        {
            this.x = -100
        }
    }

}