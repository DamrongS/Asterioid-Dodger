class StarClass
{
    constructor(x, y, d)
    {
        this.x = x;
        this.y = y;
        this.d = d;
    }

    Show()
    {
        fill(255);
        circle(this.x, this.y, this.d)
        this.x += 1;
        this.Bounds();
    }

    Bounds()
    {
        if(this.x > width + this.d)
        {
            this.x = -10 - this.d;
        }
    }

}